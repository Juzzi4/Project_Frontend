import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SelectionPage from './SelectionPage.js'
import HomePage from './HomePage.js'
import Search from 'react-search'

class SearchMusic extends Component {
  HiItems(items) {
    console.log(items)
  }

  render () {
    let items = [
      { id: 0, value: 'instrument'},
      { id: 1, value: 'piece'},
      { id: 2, value: 'composer'},
      { id: 3, value: 'arranger'},
      { id: 4, value: 'publisher'},
      { id: 5, value: 'difficulty'},
    ]

    return (
      <div>
        <Search items={items} />

        <Search items={items}
                maxSelected={10}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/selection" component={SelectionPage} />
        <Route path="/home" component={HomePage} />
        <SearchMusic />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
