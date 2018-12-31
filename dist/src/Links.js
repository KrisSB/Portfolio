import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {
    render() {
        return (
            <ul className='navBar' >
                <li className='navLink'><Link to='/'>Home</Link></li>
                <li className='navLink'><Link to='/About'>About</Link></li>
                <li className='navLink'><Link to='/Projects'>Projects</Link></li>
                <li className='navLink'><Link to='/Contact'>Contact</Link></li>
            </ul>
        );
    }
}