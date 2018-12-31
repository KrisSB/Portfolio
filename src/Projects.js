import React, { Component } from 'react';
import data from './data'; //This page holds all of the data for the projects
import { Spring , animated } from 'react-spring'; //React spring is used for the animations on the page
import Media from 'react-media';

export default class Projects extends Component {
    
    constructor() {
        super()
        this.state = {
            data,
            toggle: false,
            popUpDone: false,
            popupInfo: { },
            popupSize: .4
        }
    }
    handleClick = (e, github,about,skills,link) => {
        //Gets the starting position, size and other needed variables to pass into the div created what toggle = true
        let skillList;
        if(skills) {
            skillList = this.handleSkills(skills)
        } else {
            skillList = ''
        }
        let popupInfo = {
            top: e.target.y,
            left: e.target.x,
            width: e.target.width,
            height: e.target.height,
            img: e.target.src,
            alt: e.target.alt,
            link: link,
            github: github,
            about: about,
            skills: skillList
        }
        this.setState({ popupInfo });
        this.setState({ toggle : true });
    }
    handleSkills = (skills) => {
        let map = skills.map(skill => {
            return <li key={skill}>{skill}</li>
        })
        let skillList = <ul>
            {map}
        </ul>
        return skillList;
    }
    handleClickPopup = () => {
        this.setState({ toggle : false })
        this.setState({ popUpDone : false })
    }
    render() {
        //Maps all of the projects for the initial page, data is passed from data.js into the state data
        let projects = this.state.data.map(project=> {
            return <div key={project.class} className={`content-projects ${project.class}`}>
                            <Media query="(min-width: 1501px)">
                                <div className='project-image'><img src={project.img} alt={project.alt} onClick={(e) => this.handleClick(e,project.github, project.about, project.skills, project.href)} /></div>
                            </Media>
                            <Media query="(max-width: 1500px)">
                                <div className='project-image'><a href={project.github}><img src={project.img} alt={project.alt} /></a></div>
                            </Media>
                            <div className='project-info'>Click Image for more information</div>
                            <span>Links: </span>
                            <span className='project-link'><a href={project.href}>Website </a></span>
                            <span className='project-git'><a href={project.github}>GitHub</a></span>
                    </div>
        })
        return (
            <div className='page' id='projects'>
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div id="container">
                    <h1 className='title'>
                        <span className='text-secondary'>My</span> Projects
                    </h1>
                    <div className='content-container projects-container'>
                        {this.state.toggle ? <div className="spring-overlay"  onClick={this.handleClickPopup}></div> : null}
                        {this.state.toggle ? <Spring
                            native
                            force
                            config= {{ tension: 90, friction: 40, precision: 1 }}
                            from= {{
                                position: 'absolute',
                                top: this.state.popupInfo.top,
                                left: this.state.popupInfo.left,
                                height: this.state.popupInfo.height,
                                width: this.state.popupInfo.width,
                                background: '#F0F0F0',
                            }}
                            to= {{
                                //Centers the inner popup
                                top: window.innerHeight * this.state.popupSize / 2, 
                                left: window.innerWidth * this.state.popupSize / 2,
                                //Determines the size of the popup
                                height: window.innerHeight - (window.innerHeight * this.state.popupSize),
                                width: window.innerWidth- (window.innerWidth * this.state.popupSize),
                            }}
                        >

                            {props => (
                                <animated.div className='projectPopUp' style={props}>
                                    <div className='popUpContainer'>
                                        <div className='popUpImg'><img src={this.state.popupInfo.img} alt={this.state.popupInfo.alt} /></div>
                                        <div className='popUpAbout'>
                                            <div className='popUpHeader'>About Page:</div>
                                            <div className='popUpInfo'>{this.state.popupInfo.about}</div>
                                        </div>
                                        <div className='popUpSkills'>
                                            <div className='popUpHeader'>Skills:</div>
                                            <div className='popUpInfo'>{this.state.popupInfo.skills}</div>
                                        </div>
                                        <div className='popUpLinks'>Links: <a href={this.state.popupInfo.link}>Website </a> <a href={this.state.popupInfo.github}>Git Hub</a></div>
                                    </div>
                                </animated.div>
                            )}
                        </Spring> : null}
                        {projects}
                    </div>
                </div>
            </div>
        )
    }
}