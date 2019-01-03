import React, { Component } from 'react';
import './sass/App.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom' //React Router to transition between Pages
import Media from "react-media"; //Gives access to CSS @Media functionality
import { Spring, animated } from 'react-spring' //React Animation

import Links from './Links'; //Navigation Links

//The different pages for the portfolio Website
import HomePage from './Homepage/HomePage';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects'; 
import NoMatch from './NoMatch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            toggleMenu: false,
        }
    }
    handleMenuBtn = () => {
        if(this.state.toggleMenu === true) {
            this.setState({toggleMenu : false});
        } else {
            this.setState({toggleMenu : true});
        }
    }

    render() {
        let menuBtnClass = ["menuBtn"];
        if(this.state.toggleMenu) {
            menuBtnClass.push('showMenu');
        }
        return (
        <div className="App">
            <Router>
                <Route render={({ location }) => (
                    <div>
                        {/*Navigation Menu For Full Size Page */}
                        <div className='navContainer'>
                        <Media query="(min-width: 769px)">
                            <div>
                                <Links click={null} />
                            </div>
                        </Media>
                        {/*Navigation Menu For Mobile*/}
                        <Media query="(max-width: 768px)">
                            <div>
                                <div className='menuContainer'>
                                    <li className='menuTitle'>Keith's Portfolio</li>
                                    <li className={menuBtnClass.join(' ')} onClick={this.handleMenuBtn}>
                                        <div className='btnLine'></div>
                                        <div className='btnLine'></div>
                                        <div className='btnLine'></div> 
                                    </li>
                                </div>
                                {/* Used for the spring motion of the mobile navbar */}
                                <Spring
                                    native
                                    force
                                    config={{ tension: 500, friction: 50, precision: 1} }
                                    from={{
                                        height: 0,
                                        opacity: 0,
                                        display: 'none'
                                    }}
                                    to={{
                                        height: this.state.toggleMenu ? 'auto' : 0,
                                        opacity: 1,
                                        display: 'block'
                                    }}
                                >
                                 {props => (
                                    <animated.div style={props}>
                                        {this.state.toggleMenu ? 
                                        <Links
                                            click={this.handleMenuBtn}
                                        /> : null}
                                    </animated.div>
                                )}
                                </Spring>
                            </div>
                        </Media>
                        </div>
                        {/*Creates Animation during Transition*/}
                        <TransitionGroup>
                            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                <Switch location={location}>
                                    <Route exact path='/' render={() => <HomePage />}  />
                                    <Route path='/About' render={() => <About />}  />
                                    <Route path='/Projects' render={() => <Projects />}  />
                                    <Route path='/Contact' render={() => <Contact />}  />
                                    <Route component={NoMatch} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                )}/>
            </Router>
        </div>
        );
    }
}

export default App;
