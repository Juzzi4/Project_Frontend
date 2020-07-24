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

const listURL = "https://glacial-shore-77535.herokuapp.com/musics"

class Index extends Component {
  constructor() {
    super();
    this.state = {
        musics: [],
        limit: 12,
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

  isLoggedIn = () => {
    let user = localStorage.getItem("user");
        if(user && user !== "undefined") {
            console.log(user);
        } else {
            localStorage.removeItem("user");
        }
  }

getMusics(limit, offset, search) {
  let searchTerm = "";
  if (search) {
    searchTerm = `search=${search}&`
  }
    fetch(`${listURL}?${searchTerm}limit=${limit}&offset=${offset}`)
        .then(r => r.json())
        .then(musics => {
            this.setState({ musics: musics})
        })
        .catch( err => console.log(err));
    }

  render () {
    return(
      <div>
        <div className="row">
      <div className="col-sm">
        <Navbar isLoggedIn={this.isLoggedIn}/>
      </div>
    </div>  
      <Router>
        <MusicSearch path="/"/>
        <MusicBrowse path="/browse" offset={this.state.offset} musics={this.state.musics} handleNext={this.handleNext} handlePrevious={this.handlePrevious} />
        <SelectionPage path="/selection" />
        <SignUp path="/signup" />
        <Login path="/login" />
      </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="container fill">
  <div className="row">
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