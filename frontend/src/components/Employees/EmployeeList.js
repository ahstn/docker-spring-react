import React, { Component } from 'react';
import './Employee.css';

class EmployeeList extends Component {
  delete(id) {
    console.log(id);
  }

  render() {
    const {employees} = this.props
    if (!employees || !employees._embedded) { return null; }

    return (
      <div className="employee-list">
        <table>
          <thead>
            <tr>
              <th>Forename</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
          { employees._embedded.employees.map((employee) =>
            <tr key={employee.id}>
              <td>{employee.forename}</td>
              <td>{employee.surname}</td>
              <td>
                <i className="material-icons"
                   onClick={() => this.props.onDeleteClick(employee.id)}>
                  delete
                </i>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
