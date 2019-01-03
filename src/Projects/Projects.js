import React, { Component , Fragment} from 'react';
import data from './data'; //This page holds all of the data for the projects
import Media from 'react-media';
import Popup from './Popup'

let items = []
export default class Projects extends Component {
    
    constructor() {
        super()
        this.state = {
            data,
            toggle: false,
            popupInfo: { },
        }
    }
    handleClick = (e, github,about,skills,link) => {
        //Gets the starting position, size and other needed variables to pass into the div created what toggle = true
        let skillList;
        let scrollOffset = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
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
            scrollOffset: scrollOffset
        }
        this.setState({ popupInfo });
        this.setItems(e.target.src,link,skillList,about,github,e.target.alt);
        this.setState({ toggle : true });
    }
    setItems = (img,link,skills,about,github,alt) => {
        items = [
            <img src={img} alt={alt} />,
            <Fragment>
                <div className='popUpHeader'>About Page:</div>
                <div className='popUpInfo'>{about}</div>
            </Fragment>,
            <Fragment>
                <div className='popUpHeader'>Skills:</div>
                <div className='popUpInfo'>{skills}</div>
            </Fragment>,
            <Fragment>Links: <a href={link}>Website </a> <a href={github}>Git Hub</a></Fragment>
        ]
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
    }
    render() {
        const state = this.state.toggle ? 'open' : 'close';
        //Maps all of the projects for the initial page, data is passed from data.js into the state data
        let projects = this.state.data.map(project=> {
            return <div key={project.class} className={`content-projects ${project.class}`}>
                <Media query="(min-width: 1280px)">
                    <div className='project-image'><img src={project.img} alt={project.alt} onClick={(e) => this.handleClick(e,project.github, project.about, project.skills, project.href)} /></div>
                </Media>
                <Media query="(max-width: 1279px)">
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
                        {this.state.toggle ? 
                        <Popup
                            items={items}
                            popupInfo={this.state.popupInfo}
                            state={state}
                            handleClickPopup={this.handleClickPopup}
                        /> : null}
                        {projects}
                    </div>
                </div>
            </div>
        )
    }
}