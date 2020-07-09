import React, { Component } from 'react'
import Music from './Music.js'

class MusicSearch extends Component {
    constructor() {
        super();
        this.state = {
            index: 1
        }
    }

    renderMusic() {
        return this.props.musics.map(music => 
            <Music key={music.id} music={music} />
        )
    }

    render() {
        return (
            <div>
                <h2>{this.props && this.renderMusic()}</h2>
            </div>
        )
    }
}

export default MusicSearch;