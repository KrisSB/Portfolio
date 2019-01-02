import React, { Component } from 'react';

export default class HomePage extends Component {
    render() {
        return (
            <div className='page' id='home'>
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div id="container">
                    <div style={{fontSize: '64px', textAlign: 'center', marginTop: '300px'}}>404 Error <div>Sorry the page was not found</div></div>
                </div>
            </div>
        )
    }
}