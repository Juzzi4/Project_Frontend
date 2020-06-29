import React, { Component } from 'react'
import MusicSelection from './MusicSelection.js'
import MusicSearch from './MusicSearch.js'

const URL = "http://localhost:3000/musics"

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

    patchMusics(m) {
        fetch(`${URL}/${m.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ saved: true})
        })
    }

    handleSaveClick = (e, m) => {
        e.stopPropagation()
        this.setState({
            musics: this.state.musics.map(music => {
                if (music === m) {
                    music.saved = true
                }
                return music
            })
        })
        this.patchMusics(m)
    }

    deleteMusic = (e, m) => {
        e.stopPropagation()
        this.setState({
            musics: this.state.musics.map(music => {
                if (music === m) {
                    music.delete = true
                }
                return music
            })
        })
        this.patchMusics(m)
    }

    getMusics() {
        fetch(URL)
            .then(r => r.json())
            .then(musics => {
                this.setState({ musics: musics})
            })
    }

    render() {
        return (
            <div className="selection">
                <MusicSelection musics={this.state.musics} handleSaveClick={this.handleSaveClick} deleteMusic={this.deleteMusics}/>
                <MusicSearch musics={this.state.musics} handleSaveClick={this.handleSaveClick} />
            </div>
        )
    }
}

export default HomePage;