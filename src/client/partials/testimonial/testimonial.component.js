import React, { Component } from 'react';
import './testimonial.scss';
import axios from 'axios'



export default class Testimonial extends Component {
    text = `Polaroid bushwich microdosing tattooed. Cornhold single coffee bicycle rights lumbersexual, pour-over
    intelligents ethical selfies schlitz raw denim 90's leggings. Art party fap lumbersexual mustache actually tilde
disrupt kinfolk goth +1.`

    state = {
        text: this.text
    }
    makeRandomCall() {
        console.log('call')

        axios.get('http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe')
            .then(response => {
                this.text = response.data.value.joke;
                this.setState({
                    joke: this.joke
                })
                console.log(response)
            })


    }

    render() {
        return (
            <div className="Testimonial__Grid">
                <div className="Testimonial__Row">
                    <div className="Testimonial__Image">
                        <div className="Testimonial__Quotes">
                            <div className="Testimonial--circle">
                                <span className="Testimonial__Quotes--text">
                                    <blockquote cite="https://www.huxley.net/bnw/four.html">
                                        <p></p>
                                    </blockquote>
                                </span>
                            </div>

                        </div>
                        <div className="Testimonial__LineContainer">
                            <div className="Testimonial__Line"></div>
                        </div>
                        <div className="Testimonial__ImageEnd">
                            <div className="Testimonial--circle--small">
                            </div>
                        </div>
                    </div>
                    <div className="Testimonial__TextColumn">

                        <p>{this.text}</p>
                        <span className="Testimonial__Author">Indiana Jones, Archaeologist</span>
                    </div>
                    <div className="Testimonial__ButtonColumn">
                        <div className="Testimonial__Button" onClick={() => { this.makeRandomCall() }}>Tell Me More</div>
                    </div>
                </div>
            </div>
        );
    }
}
