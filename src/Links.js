import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {
    render() {
        return (
            <ul className='navBar' >
                <li className='navLink'><Link to='/' onClick={this.props.click}>Home</Link></li>
                <li className='navLink'><Link to='/About' onClick={this.props.click}>About</Link></li>
                <li className='navLink'><Link to='/Projects' onClick={this.props.click}>Projects</Link></li>
                <li className='navLink'><Link to='/Contact' onClick={this.props.click}>Contact</Link></li>
            </ul>
        );
    }
}