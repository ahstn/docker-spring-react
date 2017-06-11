import axios from "axios";

import { API_ROOT } from '../constants/environment';

export function fetchEmployees() {
  return {
    type: "EMPLOYEES",
    payload: axios.get(API_ROOT + '/employees')
  }
}

export function deleteEmployee(id) {
  return {
    type: "EMPLOYEES",
    payload: axios.delete(API_ROOT + '/employees/' + id)
  }
}
