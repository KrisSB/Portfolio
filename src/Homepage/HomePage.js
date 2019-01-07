import React, { Component } from 'react';

export default class HomePage extends Component {
    render() {
        return (
            <div className='page' id='home'>
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div id="container">
                    <div className='home-header'>
                        <div className='name'>
                            <h1 className='title'>
                                Keith 
                                <span className="text-secondary"> LaValley</span>
                            </h1>
                        </div>
                        <div className='description'>
                            <h2 className='sm-heading'>Web Developer and Designer</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}