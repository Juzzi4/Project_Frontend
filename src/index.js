import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from "@reach/router"
import SelectionPage from './SelectionPage.js'
import Navbar from './Navbar.js'
import SignUp from './signup.js'
import Login from './login.js'
import MusicSearch from './MusicSearch.js'

const listURL = "http://localhost:3000/musics"

class Index extends Component {
  constructor() {
    super();
    this.state = {
        musics: [],
    }
}
  
  componentDidMount() {
    this.getMusics()
  }



getMusics() {
    fetch(listURL)
        .then(r => r.json())
        .then(musics => {
            this.setState({ musics: musics})
        })
    }

  render (props) {
    return(
      <Router>
      <MusicSearch path="/" musics={this.state.musics} />
      <SelectionPage path="/selection" />
      <SignUp path="/signup" />
      <Login path="/login" />
      </Router>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="container vh-100">
    <div className="row">
      <div className="col-sm">
        <Navbar />
      </div>
  </div>
  <div className="row align-self-center bg-white">
      <div className="col">
        <Index />
      </div>
  </div>
</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();