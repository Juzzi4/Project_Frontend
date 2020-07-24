import React, { Component }from 'react';
import './App.css';

const apiURL = "https://glacial-shore-77535.herokuapp.com/"

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
            }
        })
        .then(() => {
            this.props.getMusics()
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
            <div className="col mb-4">
                <div className="card h-100">
                    <div className="card-header bg-transparent border-info"><span>{music.instrument}</span><span className="diff-display">{music.difficulty}</span></div>
                    <div className="card-body text-dark">
                        <p className="card-text">{music.piece}</p>
                        <p className="card-text">{music.composer}</p>
                        <p className="card-text">{music.arranger}</p>
                        <p className="card-text">{music.publisher}</p>
                    </div>
                <div className="card-footer bg-transparent border-info">
                <div className="btn-group" role="group">
                    <div>
                        <button type="button" className="btn btn-outline-dark"
                        onClick={(e) => {
                            e.stopPropagation();
                            this.handleSaveClick(e, music, this.state.userId)}}
                            >
                                Save
                        </button>
                    </div>

                    <div> {
                    this.state.userId && <button type="button" className="btn btn-outline-dark"
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
                </div>
            </div>
        </div>
        );
    }
}

export default Music;