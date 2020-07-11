import React, { Component }from 'react';
import './App.css';

const apiURL = "http://localhost:3000/"

class Music extends Component {
    constructor() {
        super();
        let user = localStorage.getItem("user");
        if(user && user !== "undefined") {
            user = JSON.parse(user)
        } else {
            localStorage.removeItem("user");
        }

        this.state = {
            music: {},
            userId: (user && user.id) || null
        }
    }

    patchMusics(m, u) {
        fetch(`${apiURL}users/${u}/musics/${m.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
    }

    deleteMusics(m, u) {
        fetch(`${apiURL}users/${u}/musics/${m.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
    }

    handleSaveClick = (e, m, u) => {
        e.stopPropagation()
        this.patchMusics(m, u)
    }

    deleteMusic = (e, m, u) => {
        e.stopPropagation()
        this.deleteMusics(m, u)
    }

    render() {
        const music = this.props.music;
        return (
        <div className="card-deck">
            <div className="card border-info mb-3">
                <div className="card-header bg-transparent border-info">{music.instrument}, {music.difficulty}</div>
                    <div className="card-body text-info">
                        <p className="card-text">{music.piece}</p>
                        <p className="card-text">{music.composer}</p>
                        <p className="card-text">{music.arranger}</p>
                        <p className="card-text">{music.publisher}</p>
                    </div>
                <div className="card-footer bg-transparent border-info">Save</div>
            </div>
        </div>
        );
    }
}

export default Music;