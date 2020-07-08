import React, { Component } from 'react'
import Music from './Music.js'

class MusicSearch extends Component {
    constructor() {
        super();
        this.state = {
            index: 1
        }
    }

    handleNextClick = event => {
        this.setState({ index: this.setState.index = 1 })
    }

    renderMusic() {
        let music = this.props.musics.filter(m => m.id === this.setState.index)
        return music.map(music => 
            <div className="blockmusic-wrapper">
                <div className="blockmusic" >
                    <div className="select">
                        <Music key={music.id} music={music} {...this.props}/>
                    </div>
                </div>
            </div>
            )
    }

    render() {
        return (
            <div>
                <h2>{this.renderMusic()}</h2>
            </div>
        )
    }
}

export default MusicSearch;