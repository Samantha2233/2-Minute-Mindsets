//    I M P O R T S
import React, { Component } from 'react';

// import videoService from '../../utils/videoService';
import userService from '../../utils/userService';

import Nav from '../../components/Nav/Nav';
import MobileNav from '../../components/MobileNav/MobileNav';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Videos from '../../components/Videos/Videos';
import Subscribe from '../../components/Subscribe/Subscribe';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser(),
    }
  }

  getInitialState() {
    return {
      videoList: [],
      showVideoPlayer: false,
      videoId: '',
      signUpModalIsOpen: false,
      logInModalIsOpen: false,
      dropdownOpen: false,
      mobileNavIsOpen: false
    }
  }

  //      N A V   T O G G L E R  F U N C T I O N S
  toggleNavItem = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  toggleMobileNav = () => {
    this.setState({
      mobileNavIsOpen: !this.state.mobileNavIsOpen
    })
  }


  //      A U T H E N T C A T I O N   T O G G L E R   F U N C T I O N S
  toggleSignUpModal = () => {
    this.setState({
      signUpModalIsOpen: !this.state.signUpModalIsOpen
    });
  }

  toggleLogInModal = () => {
    this.setState({
      logInModalIsOpen: !this.state.logInModalIsOpen
    });
  }


  //     A U T H E N T C A T I O N   H A N D L E R   F U N C T I O N S
  handleLogOut = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignUpOrLogIn = () => {
    console.log('handleSignUpOrLogin called');
    this.setState({ user: userService.getUser() });
  }



  //      V I D E O S
  // listVideos = async () => {
  //   let videoList = await videoService.getVideosList();
  //   this.setState({
  //     videoList: videoList
  //   })
  // }

  // handlePlayVideo = async (videoId) => {
  //   this.setState({
  //     showVideoPlayer: true,
  //     videoId: videoId
  //   });
  // }


  render() {
    return (
      <div>
        <Nav
          signUpModalIsOpen={this.state.signUpModalIsOpen}
          logInModalIsOpen={this.state.logInModalIsOpen}
          toggleLogInModal={this.toggleLogInModal}
          toggleSignUpModal={this.toggleSignUpModal}
          dropdownOpen={this.state.dropdownOpen}
          toggleNavItem={this.toggleNavItem}
          user={this.state.user}
          toggleMobileNav={this.toggleMobileNav}
          mobileNavIsOpen={this.state.mobileNavIsOpen}
        />
        <MobileNav
          toggleMobileNav={this.toggleMobileNav}
          mobileNavIsOpen={this.state.mobileNavIsOpen}
        />
        <SignUp
          toggleSignUpModal={this.toggleSignUpModal}
          signUpModalIsOpen={this.state.signUpModalIsOpen}
          handleSignUpOrLogIn={this.handleSignUpOrLogIn}
        // history={history}
        />
        <LogIn
          toggleLogInModal={this.toggleLogInModal}
          logInModalIsOpen={this.state.logInModalIsOpen}
          handleSignUpOrLogIn={this.handleSignUpOrLogIn}
        />
        <Landing />
        <About />
        <Videos />
        <Subscribe />
      </div>
    );
  }
}

export default App;
