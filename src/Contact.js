import React, { Component } from 'react';
import Media from "react-media"; //Gives access to CSS @Media functionality

export default class About extends Component {
    render() {
        return (
            <div className='page' id='contact'>
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div id="container">
                    <h1 className='title'>
                        Contact <span className='text-secondary'>Me</span>
                        <div className='content-container contact-container'>
                            <Media query="(max-width: 500px)">
                                <div className='content-contact contact-number'>
                                    <a href='tel:5175259910'>Phone: 517-525-9910</a>
                                </div>
                            </Media>
                            <Media query="(min-width: 501px)">
                                <div className='content-contact contact-number'>
                                    Phone: 517-525-9910
                                </div>
                            </Media>
                            <div className='content-contact contact-email'>
                                <a href='Mailto:kelava91@gmail.com'>Email: kelava91@gmail.com</a>
                            </div>
                            <div className='content-contact contact-address'>
                                Address: 329 Oak Ridge, Mason, MI
                            </div>
                        </div>
                    </h1>
                </div>
            </div>
        )
    }
}