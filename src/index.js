import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//create Initial State
let initialState = {
  hitung: 0,
}

//create reducer redux
const rootReducer = (state = initialState, action) => {
  if (action.type === 'HANDLE_ADD') {
      return {
        ...state,
        hitung: state.hitung + 1 
      } 
  } else if (action.type === 'HANDLE_SUBT') {
      return {
        ...state,
        hitung: state.hitung - 1 
      } 
  } 
  return state;
}
  

//create store redux
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
