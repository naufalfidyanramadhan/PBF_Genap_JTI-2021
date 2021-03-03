import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Test from './Test';
// import HelloComponent from './component/HelloComponent';
import Login from './login/Login';
import BlogPost from "./component/container/BlogPost/BlogPost";

// const HelloComponent=()=>{
//   return HelloComponent
// }

// class StateFullComponent extends React.Component{
//   render(){
//     return <p>StateFullComponent</p>
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <BlogPost />
  </React.StrictMode>,
  document.getElementById('content')
);

serviceWorker.unregister();