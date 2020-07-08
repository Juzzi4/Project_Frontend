import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SelectionPage from './SelectionPage.js'
import Navbar from './Navbar.js'

ReactDOM.render(
  <React.StrictMode>
    <div className="container vh-100">
    <div className="row">
      <div className="col-sm">
        <Navbar />
      </div>
  </div>
  <div className="row align-self-center bg-white">
      <div className="col-10">
       Search Bar
      </div>
      <div className="col-2">
        Search
      </div>
      <Router>
      <div className="col">
        <Route exact path="/" component={App} />
        <Route path="/selections" component={SelectionPage} />
      </div>
    </Router>
  </div>
</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();