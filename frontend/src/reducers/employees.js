const initialState = {
  fetching: false,
  fetched: false,
  employees: [],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_EMPLOYEES_PENDING":
      return {...state, fetching: true}
    case "FETCH_EMPLOYEES_REJECTED":
      return {...state, fetching: false, fetched: false, error: action.payload}
    case "EMPLOYEES_FULFILLED":
      return {...state, fetching: false, fetched: true, employees: action.payload}
    default:
      return state;
  }
}
