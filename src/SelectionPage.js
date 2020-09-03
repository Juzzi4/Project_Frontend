import React, { Component } from 'react';
import MusicSelection from './MusicSelection.js'

class SelectionPage extends Component {
    constructor() {
        super();
        let user = localStorage.getItem("user");
        if(user) {
            user = JSON.parse(user)
        }

        this.state = {
            musics: [],
            userId: (user && user.id) || null
        }
    }

    componentDidMount() {
        this.getMusics()
    }

    getMusics = () => {
        fetch(`http://localhost:3000/users/${this.state.userId}/musics`)
            .then(r => r.json())
            .then(musics => {
                this.setState({ musics: musics})
            })
    }

    render() {
        return (
            <div className="min-vh-100">
                <MusicSelection musics={this.state.musics} deleteMusic={this.props.deleteMusic} getMusics={this.getMusics} />
            </div>
        )
    }
}

export default SelectionPage;