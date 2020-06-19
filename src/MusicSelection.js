import React, { Component } from 'react';
import Music from './Music.js'
import { BrowserRouter as Link } from 'react-router-dom'

class MusicSelection extends Component {
componentDidMount() {
    console.log(this.props)
}
    render () {
        return (
            <div className="select">
                <div className="nav">
                    <Link to={'/selection'} >
                        My Selections
                    </Link>
                    <h4 >
                        {this.props.musics.map(music =>
                            <Music key={music.id} music={music} deleteMusic={this.props.deleteMusic} />)}
                    </h4>
                </div>
            </div>
        )
    }
}
export default MusicSelection;