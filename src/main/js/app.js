const React = require('react');
const ReactDOM = require('react-dom');

const EmployeeList = require('./components/EmployeeList');
const CreateDialog = require('./components/CreateDialog');
const client = require('./client');
const follow = require('./follow');
const root = '/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], attributes: [], pageSize: 2, links: {} };
    this.updatePageSize = this.updatePageSize.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onNavigate = this.onNavigate.bind(this);
  }

  loadFromServer(pageSize) {
    follow(client, root, [{ rel: 'employees', params: { size: pageSize } }])
      .then(employeeCollection => {
        return client({
          method: 'GET',
          path: employeeCollection.entity._links.profile.href,
          headers: { 'Accept': 'application/schema+json' }
        }).then(schema => {
          this.schema = schema.entity;
          return employeeCollection;
        });
      }).done(employeeCollection => {
        this.setState({
          employees: employeeCollection.entity._embedded.employees,
          attributes: Object.keys(this.schema.properties),
          pageSize: pageSize,
          links: employeeCollection.entity._links
        });
      });
  }

  onCreate(newEmployee) {
    follow(client, root, ['employees'])
      .then(employeeCollection => {
        return client({
          method: 'POST',
          path: employeeCollection.entity._links.self.href,
          entity: newEmployee,
          headers: { 'Content-Type': 'application/json' }
        });
      }).then(response => {
        return follow(client, root, [{ rel: 'employees', params: { 'size': this.state.pageSize } }]);
      }).done(response => {
        this.onNavigate(response.entity._links.last.href);
      });
  }

  onNavigate(navUri) {
    client({ method: 'GET', path: navUri })
      .done(employeeCollection => {
        this.setState({
          employees: employeeCollection.entity._embedded.employees,
          attributes: this.state.attributes,
          pageSize: this.state.pageSize,
          links: employeeCollection.entity._links
        });
      });
  }

  onDelete(employee) {
    client({ method: 'DELETE', path: employee._links.self.href })
      .done(response => {
        this.loadFromServer(this.state.pageSize);
      });
  }

  updatePageSize(pageSize) {
    if (pageSize !== this.state.pageSize) {
      this.loadFromServer(pageSize);
    }
  }

  componentDidMount() {
    this.loadFromServer(this.state.pageSize);
  }

  render() {
    return (
      <div>
        <CreateDialog attributes={ this.state.attributes } onCreate={ this.onCreate } />
        <EmployeeList employees={ this.state.employees }
          links={ this.state.links }
          pageSize={ this.state.pageSize }
          onNavigate={ this.onNavigate }
          onDelete={ this.onDelete }
          updatePageSize={ this.updatePageSize } />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
