import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className='page' id='contact'>
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div id="container">
                    <h1 className='title'>
                        Contact <span className='text-secondary'>Me</span>
                    </h1>
                </div>
            </div>
        )
    }
}