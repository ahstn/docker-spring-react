import axios from "axios";

import { API_ROOT } from '../constants/environment';

export function fetchEmployees() {
  return {
    type: "EMPLOYEES",
    payload: axios.get(API_ROOT + '/employees')
  }
}
