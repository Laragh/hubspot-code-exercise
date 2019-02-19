import React, { Component } from 'react';
import '../assets/scss/index.scss';
import Movies from './partials/movies/movies.component';
import Nav from './partials/nav/nav.component';
import MoviesFilters from './partials/movies-filters/movies-filters.component'
import Testimonial from './partials/testimonial/testimonial.component';
export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    return (
      // <div className="Body">
      //   <Nav></Nav>
      //   <div className="MainGrid">
      <div className="block">
        <MoviesFilters></MoviesFilters>
        <Movies></Movies>
        <Testimonial></Testimonial>
      </div>
      // </div>
    );
  }
}
