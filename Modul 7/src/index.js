import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MainReducer from './reducers/MainReducer'
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaMinus, FaCircle, FaCheckCircle } from 'react-icons/fa'

const rootReducer = combineReducers({
  form: formReducer,
 });

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
