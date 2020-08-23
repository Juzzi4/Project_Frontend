import React, { Component } from 'react';
import MusicBrowse from './MusicBrowse.js'

const listURL = "https://glacial-shore-77535.herokuapp.com/musics"

class MusicSearch extends Component {
    constructor() {
        super();
        this.state = {
            musics: [],
            limit: 6,
            offset: 0
        }
    }

    handleSearch = (e) => {
        const { limit, offset } = this.state;
        e.stopPropagation();
        const search = document.getElementById("search-bar").value;
        this.searchMusics(limit, offset, search)
    }

    handleNext = () => {
        const { limit, offset } = this.state;
        let newOffset = offset + 6;
        const search = document.getElementById("search-bar").value;
        this.setState({ offset: newOffset})
        this.searchMusics(limit, newOffset, search)
      }
    
      handlePrevious = () => {
        const { limit, offset } = this.state;
        let newOffset = offset - 6;
        if (newOffset < 0) {
          newOffset = 0;
        }
        const search = document.getElementById("search-bar").value;
        this.setState({ offset: newOffset})
        this.searchMusics(limit, newOffset, search)
      }

      searchMusics(limit, offset, search) {
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

    render() {
        return (
            <div className="min-vh-100">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome to Music Searcher</h1>
                        <p className="lead">Search for any beginner or advanced level of music. The level of rating is based 1 to 5 where 5 is the easiest and 1 is the hardest. 
                        When you search, make sure what you are searching for is capitalized and spelled correct or you wont find what you find exactly what you are looking for. 
                        If you would like to browse the entire selection then just click the search button with nothing in the search bar.</p>
                    </div>
                    </div>
                <div className="input-group mb-5">
                    <input id="search-bar" type="text" className="form-control" placeholder="Search Instruments or Composers" aria-label="Search" aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-dark" type="submit" id="button-addon2"
                        onClick={(e) => {
                            e.stopPropagation()
                            this.handleSearch(e)
                        }}
                        >
                        Search</button>
                </div>
            </div>
            <MusicBrowse path="/browse" offset={this.state.offset} musics={this.state.musics} handleNext={this.handleNext} handlePrevious={this.handlePrevious} />
        </div>
        )
    }
}


export default MusicSearch