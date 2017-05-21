const React = require('react');
const ReactDOM = require('react-dom');

const UpdateDialog = require('./UpdateDialog');

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.employee);
  }

  render() {
    return (
      <tr>
        <td>{ this.props.employee.entity.forename }</td>
        <td>{ this.props.employee.entity.surname }</td>
        <td>{ this.props.employee.entity.description }</td>
        <td>
          <UpdateDialog employee={ this.props.employee }
                        attributes={ this.props.attributes }
                        onUpdate={ this.props.onUpdate }/>
        </td>
        <td><button onClick={ this.handleDelete }>Delete</button></td>
      </tr>
    );
  }
}

export default Employee;
