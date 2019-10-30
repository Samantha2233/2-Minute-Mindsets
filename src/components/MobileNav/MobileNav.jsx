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