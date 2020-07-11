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
                <div className="p-3 mb-2 h-100 bg-dark">
                <div className="card-deck">{this.props && this.renderMusic()}</div>
                <div>
                    <button type="button" className="btn btn-info"
                     onClick={(e) => {
                        e.stopPropagation()
                        this.props.handleNext()
                    }}
                    >
                        Next
                    </button>
               </div>

               <div> {
                   
                    this.props.offset !== 0 && <button type="button" class="btn btn-info"
                   onClick={(e) => {
                       e.stopPropagation()
                       this.props.handlePrevious()
                   }}
                   >
                       Previous
                   </button>
                    }
                </div>
               </div>
            </div>
        )
    }
}

export default MusicBrowse;