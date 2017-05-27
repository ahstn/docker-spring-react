import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store'
import App from './components/App/App.js';
import './index.css';

// import { createStore } from 'redux';
// import reducer from './reducer';
// const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
),document.getElementById('root'));
