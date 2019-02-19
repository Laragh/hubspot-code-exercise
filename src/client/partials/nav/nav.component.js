import React, { Component } from 'react';
import './nav.scss'
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return (<div className="HeadingGrid">
            <ul className="Nav__Ul"><li className="  Nav__Li">
                <Link to="/">
                    Home
                    </Link>
            </li>
                <li className="Nav__Li">
                    <div>
                        <Link to="/movies">
                            Movies
                    </Link>
                    </div>
                </li>
                <li className="Nav__Li">
                    <div>
                        <Link to="/testimonial">
                            Testimonial
                    </Link>
                    </div>
                </li></ul>
        </div>);

    }
}
