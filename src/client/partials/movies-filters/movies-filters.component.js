import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './movies-filters.scss';
import FilterDropdown from './filter.component';
import { filterYears } from './years-filters';
import { filterGenres } from './genre-filters.const'


export default class MoviesFilters extends Component {

    state = {
        filterGenres: filterGenres,
        filterYears: filterYears
    }

    handleEvent() {
        this.setState({
            filterGenres: filterGenres,
            filterYears: filterYears
        })
    }

    closeDropdowns() {
        filterGenres.active = false;
        filterYears.active = false;
        this.handleEvent();
    }

    openDropdown(filter) {
        if (filter === 'genres') {
            filterGenres.active = true;
            this.handleEvent();
        } else if (filter === 'years') {
            filterYears.active = true;
            this.handleEvent();
        }
    }



    activateDropdown(filter) {

        if (filter === 'genres') {
            if (filterGenres.active) {
                this.closeDropdowns();
            } else {
                this.openDropdown('genres')
            }
        } else if (filter === 'years') {
            if (filterYears.active) {
                this.closeDropdowns();
            } else {
                this.openDropdown('years')
            }
        }

    }



    render() {

        return (
            <section className="HeadingGrid HeadingGrid--white">
                <div className="Filters__Container">
                    <div className="Filters__Row">
                        <div className="Filters__Column">
                            <div className="flex-left">
                                <FilterDropdown activateDropdown={this.activateDropdown.bind(this)} type="genres" filters={this.state.filterGenres} key="genres"></FilterDropdown>

                                <FilterDropdown activateDropdown={this.activateDropdown.bind(this)} type="years" filters={this.state.filterYears} key="years"></FilterDropdown>

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
                            <div className="Filters--flex-left">
                                <div>
                                    <input type="radio" />
                                    <label>Movies</label>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <label>Books</label>
                                </div>
                            </div>
                            <div className="Filters--flex-right">
                                <div>
                                    <a href="#">Clear filters</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>);

    }
}
