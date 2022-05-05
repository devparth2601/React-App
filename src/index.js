import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header.jsx';
import 'bootstrap5/src/css/bootstrap.min.css';
import Store from './store'
import {Provider} from 'react-redux';





// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     {/* <h1>This is react app</h1>
//     <Home/>
//     <About/> */}
//     <Header />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={Store}>
    <Header/>

  </Provider>,
  document.getElementById('root')

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
