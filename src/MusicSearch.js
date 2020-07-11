import React, { Component } from 'react';

class MusicSearch extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="min-vh-100">
                <div className="input-group mb-5">
                    <input type="text" className="form-control" placeholder="Search Instruments or Composers" aria-label="Search" aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-dark" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
        )
    }
}


export default MusicSearch