const React = require('react');

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
        <td>{ this.props.employee.forename }</td>
        <td>{ this.props.employee.surname }</td>
        <td>{ this.props.employee.description }</td>
        <td><button onClick={ this.handleDelete }>Delete</button></td>
      </tr>
    );
  }
}

export default Employee;
