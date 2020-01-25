import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import './Nav.scss';

class Nav extends Component {
    render() {
        return (
            <div className='nav' >
                <div className='logo-and-links'>
                    <a href='#landing'>
                        <img className='logo' src='../../../images/logo-purple.png' alt='logo' />
                    </a>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href='#video-section'>Videos</a></li>
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
                        <Dropdown
                            isOpen={this.props.userDropdownIsOpen}
                            toggle={this.props.toggleUserDropdown}
                        >
                            <DropdownToggle id='user-icon'>
                                <i className='far fa-user'></i>
                            </DropdownToggle>
                            <DropdownMenu id='dropdown-menu'>
                                <DropdownItem
                                    onClick={this.props.handleLogOut}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>

                        </Dropdown>


                        :
                        <div>
                            <Button
                                onClick={this.props.toggleSignUpModal}
                                signUpModalIsOpen={this.props.signUpModalIsOpen}
                                id="sign-up-button"
                            >Sign Up
                        </Button>
                            <Button
                                onClick={this.props.toggleLogInModal}
                                logInModalIsOpen={this.props.logInModalIsOpen}
                                id="log-in-button"
                            >Log In
                        </Button>
                            <a href='https://www.facebook.com/2minmind/' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-square social-icon"></i></a>
                            <a href='https://www.linkedin.com/in/nathanczubaj/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin social-icon"></i></a>
                            <a href='https://www.youtube.com/channel/UCM9nVV4XuU_xmfMeibrCOoA' target='_blank' rel='noopener noreferrer'><i className="fab fa-youtube-square social-icon"></i></a>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Nav;