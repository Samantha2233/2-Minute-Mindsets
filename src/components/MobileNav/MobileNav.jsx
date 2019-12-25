import React, { Component } from 'react';
import './MobileNav.scss';

class MobileNav extends Component {
    render() {
        return (
            <>
                {
                    this.props.mobileNavIsOpen ?
                        <div id="mobile-nav" >
                            <ul>
                                <li><a
                                    href='#about'
                                    onClick={this.props.toggleMobileNav}
                                >About</a></li>
                                <li><a
                                    href='#videos'
                                    onClick={this.props.toggleMobileNav}
                                >Videos</a></li>
                                {/* <li><a
                                    href='#transcriptions'
                                    onClick={this.props.toggleMobileNav}
                                >Transcriptions</a></li> */}
                                <li><a
                                    href='#subscribe'
                                    onClick={this.props.toggleMobileNav}
                                >Subscribe</a></li>
                                <hr></hr>
                                {this.props.user ?
                                    <div>
                                        <li
                                            onClick={this.props.handleLogOut}
                                        >Log Out</li>
                                    </div>
                                    :
                                    <div>
                                        <li
                                            onClick={this.props.toggleSignUpModal}
                                            signUpModalIsOpen={this.props.signUpModalIsOpen}

                                        >Sign Up</li>
                                        <li
                                            onClick={this.props.toggleLogInModal}
                                            logInModalIsOpen={this.props.logInModalIsOpen}
                                        >Log In</li>
                                    </div>
                                }

                                <div id='mobile-nav-icon-box'>
                                    <a href='https://www.facebook.com/2minmind/' target='_blank' rel='noopener noreferrer'><i class="fab fa-facebook-square social-icon"></i></a>
                                    <a href='https://www.linkedin.com/in/nathanczubaj/' target='_blank' rel='noopener noreferrer'><i class="fab fa-linkedin social-icon"></i></a>
                                    <a href='https://www.youtube.com/channel/UCM9nVV4XuU_xmfMeibrCOoA' target='_blank' rel='noopener noreferrer'><i class="fab fa-youtube-square social-icon"></i></a>
                                </div>
                            </ul>
                        </div>
                        :
                        null
                }

            </>
        )
    }
}

export default MobileNav;