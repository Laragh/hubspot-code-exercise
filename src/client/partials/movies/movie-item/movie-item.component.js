import React, { Component } from 'react';
import './movie-item.scss';

export default class MovieItem extends Component {

    render() {
        return (
            <div className="MovieItem__Column">
                <div className="MovieItem__Poster">
                    <img src={this.props.movie.poster} />
                </div>
                <div className="MovieItem__Info MovieItem__Info--title">
                    <strong>{this.props.movie.title}</strong>
                </div>
                <div className="MovieItem__Info">
                    <div>{this.props.movie.genre}</div>
                </div>
            </div>
        );
    }
}
