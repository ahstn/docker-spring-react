import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from "axios";

import EmployeeList from '../Employees/EmployeeList'
import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => ({
  employees: state.employees.employees.data
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch({
    type: "EMPLOYEES",
    payload: axios.get("http://localhost:8080/api/employees")
  })
})

class App extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to DSR</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EmployeeList employees={this.props.employees} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
