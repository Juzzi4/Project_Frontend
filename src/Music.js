import React from 'react';
import './App.css';

const Music = (props) => {
    return (
        <div >
            <div>
                <h3> {props.music.instrument} </h3>
            </div>
            <div>
                <h1> {props.music.piece} </h1>
            </div>
            <div>
                <h2> {props.music.composer} </h2>
            </div>
            <div>
                {props.music.arranger}
            </div>
            <div>
                <h3> {props.music.publisher} </h3>
            </div>
            <div>
                {props.music.difficulty}
            </div>
            <div>
                <button
                onClick={(e) => {
                    e.stopPropagation();
                    props.handleSaveClick(e, props.music, props.user)}}
                    >
                        Save
                </button>
            </div>

            <div>
                <button 
                onClick={(e) => {
                    e.stopPropagation();
                    props.deleteMusic(e, props.music, props.user)}}
                    >
                        Delete
                </button>
            </div>

        </div>
    );
}

export default Music