import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className='page' id='about'>
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div id="container">
                    <h1 className='title'>About <span className='text-secondary'> Me</span></h1>
                    <div className='content-container about-container'>
                        <div className='content-about content-about1'>
                            <div className='about-image'></div>
                        </div>
                        <div className='content-about2'>
                            <span className='text-secondary'> Web Technologies</span> 
                            <p><b>Web Technologies & Frameworks:</b> Laravel, ReactJS, HTML5, CSS3.0, PHP</p>
                            <p><b>Scripts/UI:</b> JavaScript, OOJS, JQuery, AJAX, JSON, Fetch, BootStrap, Flex, Grid</p>
                            <p><b>Database and ORM:</b> MySQL</p>
                            <p><b>Web Debug Tools:</b> Mozilla Firefox developer tools, Chrome developer tools</p>
                            <p><b>Application/Web Server:</b> Apache, Nginx</p>
                            <p><b>Versioning and other tools:</b> Git</p>
                            <p><b>Cloud:</b> DigitalOcean</p>
                        </div>
                        <div className='content-about content-about3'>
                            <span className='text-secondary'> Back-end Development:</span> 
                            <p> 
                                For a long time my primary focus was on back-end development with PHP. 
                                It came much easier to me and loved the pages you create with it, especially due to having access to a database.
                            </p>
                        </div>
                        <div className='content-about content-about4'>
                            <span className='text-secondary'> Front-end Development:</span> 
                            <p> 
                                I love front-end development, whether it's the ability to deal with events, the use of animations, or dictating how the page functions. Front-end development has so many tools now to create dynamic and beautiful websites.
                            </p>
                        </div>
                        <div className='content-about content-about5'>
                            <span className='text-secondary'> A Yearning for Learning:</span> 
                            <p> 
                                With all the frameworks coming out for web development, it is a pleasure to learn web development. 
                                The two main frameworks that I have studied to date are react for the front-end and laravel for the back-end.
                                I plan to start studying Angular and ASP.net shortly to diversify my knowledge in web development.
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}