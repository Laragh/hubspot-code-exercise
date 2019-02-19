import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createBrowserHistory from 'history/createBrowserHistory'
import Movies from './partials/movies/movies.component';
import MoviesFilters from './partials/movies-filters/movies-filters.component';
import FilterDropdown from './partials/testimonial/testimonial.component'
import Testimonial from './partials/testimonial/testimonial.component';
import Nav from './partials/nav/nav.component'

const newHistory = createBrowserHistory();

import { Router, Route } from 'react-router';

ReactDOM.render(
    <div className="Body">
        <Router history={newHistory}>
            <div className="block">
                <Nav></Nav>
                <div className="MainGrid">
                    <Route exact path="/" component={App} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/movies-filter" component={MoviesFilters} />
                    <Route path="/dropdown" component={FilterDropdown} />
                    <Route path="/testimonial" component={Testimonial} />
                </div>
            </div>
        </Router>

    </div>, document.getElementById('root'));
