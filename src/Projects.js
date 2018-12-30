import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <div className='page' id='projects'>
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div id="container">
                    <h1 className='title'>
                        <span className='text-secondary'>My</span> Projects
                    </h1>
                    <div className='content-projects1'>
                        <div className='project-image'><img src='http://localhost:3000/projects/vgwebsite.jpg' /></div>
                        <div className='project-link'><a href="http://142.93.119.73/">Site Link</a></div>
                        <div className='project-git'><a href="https://github.com/KrisSB/Laravel-React-Website">GitHub Link</a></div>
                    </div>
                    <div className='content-projects2'>
                        <div className='project-image'><img src='http://localhost:3000/projects/lsapp.jpg' /></div>
                        <div className='project-link'><a href="#">Site Link</a></div>
                        <div className='project-git'><a href="https://github.com/KrisSB/Laravel-Website">GitHub Link</a></div>
                    </div>
                    <div className='content-projects3'>
                        <div className='project-image'><img src='http://localhost:3000/projects/sbe.jpg' /></div>
                        <div className='project-link'><a href="http://www.shadowbaneemulator.com">Site Link</a></div>
                        <div className='project-git'><a href="https://github.com/KrisSB/SBE">GitHub Link</a></div>
                    </div>
                </div>
            </div>
        )
    }
}