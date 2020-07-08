import React, { Component } from 'react'
import MusicSelection from './MusicSelection.js'
import MusicSearch from './MusicSearch.js'

const listURL = "http://localhost:3000/musics"
const u = "1"
const apiURL = "http://localhost:3000/"
class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            musics: [],
        }
    }

    componentDidMount() {
        this.getMusics()
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

    handleSaveClick = (e, m, u) => {
        e.stopPropagation()
        this.setState({
            musics: this.state.musics.map(music => {
                if (music === m) {
                    music.saved = true
                }
                return music
            })
        })
        this.patchMusics(m, u)
    }

    deleteMusic = (e, m, u) => {
        e.stopPropagation()
        this.setState({
            musics: this.state.musics.map(music => {
                if (music === m) {
                    music.delete = true
                }
                return music
            })
        })
        this.patchMusics(m, u)
    }

    getMusics() {
        fetch(listURL)
            .then(r => r.json())
            .then(musics => {
                this.setState({ musics: musics})
            })
    }

    render() {
        return (
            <div>
                <MusicSelection user={u} musics={this.state.musics} handleSaveClick={this.handleSaveClick} deleteMusic={this.deleteMusic}/>
                <MusicSearch user={u} musics={this.state.musics} handleSaveClick={this.handleSaveClick} deleteMusic={this.deleteMusic} />
            </div>
        )
    }
}

export default HomePage;