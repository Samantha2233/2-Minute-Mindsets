import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import './Nav.scss';

class Nav extends Component {

    render() {
        return (
            <div className='nav' >
                <div className='logo-and-links'>
                    <img className='logo' src='../../../images/logo-purple.png' alt='logo' />
                    <ul>
                        <li><a href="#about">About</a></li>
                        <Dropdown isOpen={this.props.dropdownOpen} toggle={this.props.toggleNavItem}>
                            <DropdownToggle id='resources'>Resources</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><a href='#videos'>Videos</a></DropdownItem>
                                <DropdownItem>Transcriptions</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <li><a href='#subscribe'>Subscribe</a></li>
                    </ul>
                </div>
                <div id="nav-right">
                    {this.props.mobileNavIsOpen ?
                        <img
                            id="exit"
                            src='../../../images/Exit-icon-purple.png'
                            alt='exit mobile-menu icon'
                            onClick={this.props.toggleMobileNav}
                            mobileNavIsOpen={this.props.mobileNavIsOpen}
                        />
                        :

                        <img
                            id='hamburger'
                            src='../../../images/hamburger-purple.png'
                            alt='mobile-menu icon'
                            onClick={this.props.toggleMobileNav}
                            mobileNavIsOpen={this.props.mobileNavIsOpen}
                        />
                    }

                    {this.props.user ?
                        <i id='user-icon' class='far fa-user'></i>
                        :
                        <Button
                            onClick={this.props.toggleModal}
                            modalIsOpen={this.props.modalIsOpen}
                            id="sign-up-button"
                        >Sign Up
                        </Button>
                    }
                </div>
            </div>
        )
    }
}

export default Nav;