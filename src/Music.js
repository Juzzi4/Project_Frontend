import React, { Component }from 'react';
import './App.css';

const apiURL = "http://localhost:3000/"

class Music extends Component {
    constructor() {
        super();
        let user = localStorage.getItem("user");
        if(user) {
            user = JSON.parse(user)
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
        debugger
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
            <div >
                <div>
                    <h3> {music.instrument} </h3>
                </div>
                <div>
                    <h1> {music.piece} </h1>
                </div>
                <div>
                    <h2> {music.composer} </h2>
                </div>
                <div>
                    {music.arranger}
                </div>
                <div>
                    <h3> {music.publisher} </h3>
                </div>
                <div>
                    {music.difficulty}
                </div>
                <div>
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        this.handleSaveClick(e, music, this.state.userId)}}
                        >
                            Save
                    </button>
                </div>
    
                <div> {
                    this.state.userId && <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        this.deleteMusic(e, music, this.state.userId);
                    }}
                        >
                            Delete
                    </button>
                    }
                </div>
    
            </div>
        );
    }
}

export default Music