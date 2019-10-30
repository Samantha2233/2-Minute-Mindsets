import React, { Component } from 'react';

// import videoService from '../../utils/videoService';
// import userService from '../../utils/userService';

import Nav from '../../components/Nav/Nav';
import MobileNav from '../../components/MobileNav/MobileNav';
import SignUp from '../../components/SignUp/SignUp';
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
    }
  }

  getInitialState() {
    return {
      // user: userService.getUser(),
      user: false,
      videoList: [],
      showVideoPlayer: false,
      videoId: '',
      modalIsOpen: false,
      dropdownOpen: false,
      mobileNavIsOpen: false
    }
  }

  //      N A V 
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


  //      S I G N   U P   M O D A L
  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
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
          modalIsOpen={this.state.modalIsOpen}
          toggleModal={this.toggleModal}
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
          toggleModal={this.toggleModal}
          modalIsOpen={this.state.modalIsOpen}
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
