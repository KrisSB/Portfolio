import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className='page' id='about'>
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div id="container">
                    <h1 className='title'>About <span className='text-secondary'> Me</span></h1>
                    <div class='content-container'>
                        <div className='content-about1'>
                            <div className='about-image'></div>
                        </div>
                        <div className='content-about2'>
                            <span className='text-secondary'> Passion:</span> 
                            <p> 
                                I love web development, the first time I made a webpage was in 2013. 
                                My computer science teacher had us create our own webpage throughout the semester. from there I would go home and mess around making geocities websites.
                                I got back into web design my junior year of high school learning CSS and finally delved into php and back-end development, 
                                I was hooked ever since.
                            </p>
                        </div>
                        <div className='content-about3'>
                            <span className='text-secondary'> Skills:</span> 
                            <p> 
                                <p>Web Technologies & Frameworks: Laravel, ReactJS, HTML5, CSS3.0, PHP</p>
                                <p>Scripts/UI: JavaScript, OOJS, JQuery, AJAX, JSON, Fetch, BootStrap, Flex, Grid</p>

                            </p>
                        </div>
                        <div className='content-about4'>
                            <span className='text-secondary'> Back-end Development:</span> 
                            <p> 
                                For a long time my primary focus was on back-end development with PHP. 
                                It came much easier to me and loved the pages you create with it, especially due to having access to a database.
                            </p>
                        </div>
                        <div className='content-about5'>
                            <span className='text-secondary'> Front-end Development:</span> 
                            <p> 
                                I love front-end development, whether it's the ability to deal with events, or the through the use of animations. Front-end development has so many tools now to create Dynamic and beautiful websites.
                            </p>
                        </div>
                        <div className='content-about6'>
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