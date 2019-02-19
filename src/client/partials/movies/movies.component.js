import React, { Component } from 'react';
import { media } from './movies.const.js';
import MovieItem from './movie-item/movie-item.component';
import MoviesFilters from '../movies-filters/movies-filters.component'

import './movies.scss';
let movies = media;
export default class Movies extends Component {
    movies = null;

    state = { movies: null };

    componentDidMount() {
        this.setState({ movies: media });
    }

    setMovies(moviesList) {
        movies = moviesList;
        this.setState({ movies: moviesList });
    }

    render() {
        return (<div>
            <MoviesFilters setMovies={this.setMovies.bind(this)} movies={movies}></MoviesFilters>
            <div className="Movies__Container">
                {movies.map((item, i) => {
                    return <MovieItem movie={item} key={i} ></MovieItem>
                })}
            </div>
        </div>);

    }
}
