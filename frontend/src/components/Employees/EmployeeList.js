import React, { Component } from 'react';

class EmployeeList extends Component {
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
            <tr>
              <td>{employee.forename}</td>
              <td>{employee.surname}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
