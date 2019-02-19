import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { media } from './movies.const.js';
import MovieItem from './movie-item/movie-item.component';
import './movies.scss';


export default class Movies extends Component {

    state = { media: null };

    componentDidMount() {
        this.setState({ media: media });
    }

    render() {
        return (<div>
            <div className="Movies__Container">
                {media.map((item, i) => {
                    return <MovieItem movie={item} key={i}></MovieItem>
                })}
            </div>
        </div>);

    }
}
