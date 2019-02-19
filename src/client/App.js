import React, { Component } from 'react';
import '../assets/scss/index.scss';
import Movies from './partials/movies/movies.component';
import Testimonial from './partials/testimonial/testimonial.component';
export default class App extends Component {
  state = { username: null };

  render() {
    return (
      <div className="block">

        <Movies></Movies>
        <Testimonial></Testimonial>
      </div>
    );
  }
}
