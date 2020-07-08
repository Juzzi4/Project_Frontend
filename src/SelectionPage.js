import React, { Component } from 'react';
import MusicSelection from './MusicSelection.js'

const URL = "http://localhost:3000/users/1/musics"

class SelectionPage extends Component {
    constructor() {
        super();
        this.state = {
            musics: [],
        }
    }

    componentDidMount() {
        this.getMusics()
    }

    getMusics = () => {
        fetch(URL)
            .then(r => r.json())
            .then(musics => {
                this.setState({ musics: musics})
            })
    }

    render() {
        return (
            <div className="selections">
                <MusicSelection musics={this.state.musics} deleteMusic={this.props.deleteMusic} />
            </div>
        )
    }
}

export default SelectionPage;