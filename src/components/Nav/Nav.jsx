import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
import './Nav.scss';

const Nav = props => {
    return (
        <div className='nav'>
            <div className='logo-and-links'>
                <img className='logo' src="../../../images/logo-purple.png" alt='logo' />
                <ul>
                    <li>About</li>
                    <li>Videos</li>
                    <li>Subscribe</li>
                </ul>
            </div>
            <div>
                <img id='hamburger' src='../../../images/hamburger-purple.png' alt='mobile-menu icon' />
                <img id="exit" src='../../../images/Exit-icon-purple.png' alt='exit mobile-menu icon' />
            </div>
        </div>
    )
}

export default Nav;