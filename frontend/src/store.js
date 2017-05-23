import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './reducer';

const getMiddleware = () => {
  // Enable additional logging in non-production environments.
  if (process.env.NODE_ENV != 'production') {
    return applyMiddleware(createLogger())
  }
}

const store = createStore(
  reducer, compose(
    getMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
