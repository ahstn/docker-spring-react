import {
  EMPLOYEES_LOADED,
  EMPLOYEES_UNLOADED,
  EMPLOYEES_ADD,
  EMPLOYEES_DELETE
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED:
      return {
        ...state,
        employee: action.payload[0].employee
      };
    case EMPLOYEES_UNLOADED:
      return {};
    default:
      return state;
  }
}
