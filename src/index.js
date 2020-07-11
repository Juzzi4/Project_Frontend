import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from "@reach/router"
import SelectionPage from './SelectionPage.js'
import Navbar from './Navbar.js'
import SignUp from './signup.js'
import Login from './login.js'
import MusicBrowse from './MusicBrowse.js'
import MusicSearch from './MusicSearch.js'

const listURL = "http://localhost:3000/musics"

class Index extends Component {
  constructor() {
    super();
    this.state = {
        musics: [],
        limit: 20,
        offset: 0,
    }
}
  
  componentDidMount() {
    const { limit, offset } = this.state;
    this.getMusics(limit, offset)
  }

  handleNext = () => {
    const { limit, offset } = this.state;
    let newOffset = offset + 10;
    this.setState({ offset: newOffset})
    this.getMusics(limit, newOffset)
  }

  handlePrevious = () => {
    const { limit, offset } = this.state;
    let newOffset = offset - 10;
    if (newOffset < 0) {
      newOffset = 0;
    }
    this.setState({ offset: newOffset})
    this.getMusics(limit, newOffset)
  }

getMusics(limit, offset) {
    fetch(`${listURL}?limit=${limit}&offset=${offset}`)
        .then(r => r.json())
        .then(musics => {
            this.setState({ musics: musics})
        })
        .catch( err => console.log(err));
    }

  render () {
    return(
      <Router>
      <MusicSearch path="/" />
      <MusicBrowse path="/browse" offset={this.state.offset} musics={this.state.musics} handleNext={this.handleNext} handlePrevious={this.handlePrevious} />
      <SelectionPage path="/selection" />
      <SignUp path="/signup" />
      <Login path="/login" />
      </Router>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="container fill">
    <div className="row">
      <div className="col-sm">
        <Navbar />
      </div>
  </div>
  <div className="row align-self-center">
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