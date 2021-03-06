import React, { Component } from 'react'
import Music from './Music.js'

class MusicBrowse extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    renderMusic() {
        return this.props.musics.map(music => 
            <Music key={music.id} music={music} />
        )
    }

    render() {
        return (
            <div className="min-vh-100">
                <div className="p-3 mb-2 h-100">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3">
                            {this.props && this.renderMusic()}
                        </div>
                    </div>
                    <div className="btn-group-vertical">
                        { this.props.musics.length > 0 && <button type="button" className="btn btn-outline-dark"
                        onClick={(e) => {
                            e.stopPropagation()
                            this.props.handleNext()
                        }}
                        >Next</button>
                        }

                        { this.props.offset !== 0 && <button type="button" className="btn btn-outline-dark"
                        onClick={(e) => {
                            e.stopPropagation()
                            this.props.handlePrevious()
                        }}
                        >Previous</button>
                            }
                    </div>
               </div>
            </div>
        )
    }
}

export default MusicBrowse;