import React, { Component } from 'react';
import './movies-filters.scss';
import FilterDropdown from './filter.component';
import { filterYears } from './years-filters';
import { filterGenresList } from './genre-filters.const'
import { media } from '../movies/movies.const';


export default class MoviesFilters extends Component {

    selectedGenres = [];
    selectedYears = [];
    movies = this.props.movies;
    movieList = [];
    moviesSelected = 'true';
    booksSelected = 'false';

    filterGenres = filterGenresList.movies;
    filterYears = filterYears;

    state = {
        filterGenres: this.filterGenres,
        filterYears: filterYears,
        selectedGenres: this.selectedGenres,
        selectedYears: this.selectedYears,
        booksSelected: false,
        moviesSelected: false
    }


    handleEvent() {
        this.setState({
            filterGenres: this.filterGenres,
            filterYears: filterYears,
            selectedGenres: this.selectedGenres,
            selectedYears: this.selectedYears
        })
    }

    closeDropdowns() {
        this.filterGenres.active = false;
        this.filterYears.active = false;
        this.handleEvent();
    }

    openDropdown(filter) {
        switch (filter) {
            case 'genres-movies':
                this.filterGenres = filterGenresList.movies;
                this.filterGenres.active = true;
                this.handleEvent();
                break;
            case 'years':
                this.filterYears.active = true;
                this.handleEvent();
                break;
            case 'genres-books':
                this.filterGenres = filterGenresList.books;
                this.filterGenres.active = true;
                this.handleEvent();
                break;
            default:
            // code block
        }

    }



    activateDropdown(filter) {
        switch (filter) {
            case 'genres-movies':
                if (this.filterGenres.active) {
                    this.closeDropdowns();
                } else {
                    this.openDropdown('genres-movies')
                }
                break;
            case 'years':
                if (filterYears.active) {
                    this.closeDropdowns();
                } else {
                    this.openDropdown('years')
                }
                break;
            case 'genres-books':
                if (this.filterGenres.active) {
                    this.closeDropdowns();
                } else {
                    this.openDropdown('genres-books')
                }
                break;
            default:
        }
    }

    filterGenresList() {
        let selectedGenres = this.selectedGenres;
        let movies = this.props.movies;
        this.moviesList = [];
        let moviesList = [];

        if (selectedGenres.length) {
            selectedGenres.forEach((item) => {
                movies.forEach(movie => {
                    if (movie.genre.includes(item.name)) {
                        if (this.moviesSelected === 'true') {
                            if (movie.type === 'movie') {
                                moviesList.push(movie)
                            }
                        } else {
                            if (movie.type === 'book') {
                                moviesList.push(movie)
                            }
                        }
                    }
                });
            })
            moviesList = moviesList;
            this.props.setMovies(moviesList);
        } else if (!selectedGenres.length) {
            movies = media;
            moviesList = [];
            movies.forEach(movie => {
                if (this.moviesSelected === 'true') {
                    if (movie.type === 'movie') {
                        moviesList.push(movie)
                    }
                } else if (this.booksSelected === 'true') {
                    if (movie.type === 'book') {
                        moviesList.push(movie)
                    }
                }

            });
            setTimeout(() => {
                this.props.setMovies(moviesList);
            })
        }
    }

    genreCheckboxHandler(item) {
        const selectedGenres = this.selectedGenres
        item.checked = !item.checked;
        if (item.checked) {
            selectedGenres.push(item);
            setTimeout(() => {
                this.handleEvent();
            });
        } else {
            selectedGenres.map((genre, i) => {
                if (genre === item) {
                    selectedGenres.splice(0, (i + 1));
                }
            });
            setTimeout(() => {
                this.handleEvent();
            }, 100)
        }

        setTimeout(() => {
            this.filterGenresList();
        })

    }

    yearsCheckboxHandler(item) {
        const selectedYears = this.selectedYears
        item.checked = !item.checked;
        if (item.checked) {
            selectedYears.push(item);
        } else {
            selectedYears.map((year, i) => {
                if (year === item) {
                    selectedYears.splice(0, i)
                }
            })

        }
        this.handleEvent();
        setTimeout(() => {
            this.filterYears();
        })
    }

    moviesCheckboxHandler(changeEvent) {
        this.selectedGenres = [];
        this.selectedYears = [];
        this.filterGenres = filterGenresList.movies;
        this.moviesSelected = changeEvent.target.value;
        this.booksSelected = 'false'
        this.moviesSelected = 'true';
        this.handleEvent();
        this.filterGenresList();
    }

    booksCheckboxHandler(changeEvent) {
        this.selectedGenres = [];
        this.selectedYears = [];
        this.filterGenres = filterGenresList.books;
        this.booksSelected = changeEvent.target.value;
        this.booksSelected = 'true'
        this.moviesSelected = 'false';
        this.handleEvent();
        this.filterGenresList();
    }

    resetSearch() {
        this.selectedGenres = [];
        this.selectedYears = [];
        this.filterGenres = filterGenresList.movies;
        this.booksSelected = 'false';
        this.moviesSelected = 'true';
        this.movies = media;
        this.handleEvent();
        this.filterGenresList();
    }



    render() {

        return (
            <section className="HeadingGrid HeadingGrid--white">
                <div className="Filters__Container">
                    <div className="Filters__Row">
                        <div className="Filters__Column">
                            <div className="flex-left">
                                <FilterDropdown activateDropdown={this.activateDropdown.bind(this)} type={this.moviesSelected === 'true' ? 'genres-movies' : 'genres-books'} filters={this.state.filterGenres} key="genres" checkboxHandler={this.genreCheckboxHandler.bind(this)}></FilterDropdown>

                                <FilterDropdown activateDropdown={this.activateDropdown.bind(this)} type="years" filters={this.state.filterYears} key="years" checkboxHandler={this.yearsCheckboxHandler.bind(this)}></FilterDropdown>

                            </div>
                            <div className="flex-right">
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Filters__Row">
                        <div className="Filters__Column">
                            <div className="flex-left">
                                <div className="Filters__Radios">
                                    <input type="radio" value={this.moviesSelected} checked={this.moviesSelected === 'true'} onChange={this.moviesCheckboxHandler.bind(this)} />
                                    <label>Movies</label>
                                </div>
                                <div className="Filters__Radios">
                                    <input type="radio" value={this.booksSelected} checked={this.booksSelected === 'true'} onChange={this.booksCheckboxHandler.bind(this)} />
                                    <label>Books</label>
                                </div>
                            </div>
                            <div className="flex-right">
                                <div>
                                    <div onClick={this.resetSearch.bind(this)}>Clear filters</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>);

    }
}
