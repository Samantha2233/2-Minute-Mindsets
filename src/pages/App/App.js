//    I M P O R T S
import React, { Component } from 'react';
// import { Route, Switch } from "react-router-dom";
// import { Button } from 'reactstrap';
import './App.css';


import videoService from '../../utils/videoService';
import userService from '../../utils/userService';
import subscriptionService from '../../utils/subscriptionService';

import Nav from '../../components/Nav/Nav';
import MobileNav from '../../components/MobileNav/MobileNav';
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';
import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import FeatureVideo from '../../components/FeatureVideo/FeatureVideo';
import VideoList from '../../components/VideoList/VideoList';
import Videos from '../../components/Videos/Videos';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Subscribe from '../../components/Subscribe/Subscribe';
import SubscriptionSuccess from '../../components/SubscriptionSuccess/SubscriptionSuccess';



class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      ...this.listVideos(),

    }
  }

  getInitialState() {
    return {
      user: userService.getUser(),
      videoList: [],
      videoId: '',
      emails: [],
      videoPlayerIsOpen: false,
      signUpModalIsOpen: false,
      logInModalIsOpen: false,
      dropdownOpen: false,
      mobileNavIsOpen: false,
      userDropdownIsOpen: false,
      thankYouModalIsOpen: false,
      navUpdated: false,
      name: '',
      email: '',
      password: '',
      passwordConf: '',
      message: ''
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

  toggleUserDropdown = () => {
    this.setState({
      userDropdownIsOpen: !this.state.userDropdownIsOpen
    });
  }

  //      S U B S C R I P T I O N   T H A N K   Y O U  
  toggleThankYouModal = () => {
    this.setState({
      thankYouModalIsOpen: !this.state.thankYouModalIsOpen
    })
  }


  //     A U T H E N T C A T I O N   H A N D L E R   F U N C T I O N S
  handleLogOut = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignUpOrLogIn = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  }

  handleChange = (e) => {
    this.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignUpOrLogin();
    } catch (err) {
      this.updateMessage(err.message);
    }
  }

  isFormInvalid = () => {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }







  //      V I D E O S
  //  List latest channel videos from Youtube API onto home page
  listVideos = async () => {
    let videoList = await videoService.getChannelVideos();
    this.setState({
      videoList: videoList
    });
  }

  handlePlayVideo = async (videoId) => {
    this.setState({
      videoPlayerIsOpen: true,
      videoId: videoId
    });
  }

  toggleVideoPlayer = () => {
    this.setState({
      videoPlayerIsOpen: !this.state.videoPlayerIsOpen
    })
  }










  //      E M A I L   S U B S C R I P T I O N

  handleEmailSubmission = async newEmailData => {
    const newEmail = await subscriptionService.create(newEmailData);
    this.setState(state => ({
      emails: [...state.emails, newEmail],
      thankYouModalIsOpen: true
    }));
  }






  render() {
    return (
      <div>
        <Nav
          user={this.state.user}
          signUpModalIsOpen={this.state.signUpModalIsOpen}
          logInModalIsOpen={this.state.logInModalIsOpen}
          handleLogOut={this.handleLogOut}
          toggleLogInModal={this.toggleLogInModal}
          toggleSignUpModal={this.toggleSignUpModal}
          dropdownOpen={this.state.dropdownOpen}
          toggleNavItem={this.toggleNavItem}
          toggleMobileNav={this.toggleMobileNav}
          mobileNavIsOpen={this.state.mobileNavIsOpen}
          toggleUserDropdown={this.toggleUserDropdown}
          userDropdownIsOpen={this.state.userDropdownIsOpen}
          navUpdated={this.state.navUpdated}
        />
        <MobileNav
          toggleMobileNav={this.toggleMobileNav}
          mobileNavIsOpen={this.state.mobileNavIsOpen}
          user={this.state.user}
          toggleSignUpModal={this.toggleSignUpModal}
          signUpModalIsOpen={this.state.signUpModalIsOpen}
          toggleLogInModal={this.toggleLogInModal}
          logInModalIsOpen={this.state.logInModalIsOpen}
        />
        <SignUp
          user={this.state.user}
          toggleSignUpModal={this.toggleSignUpModal}
          signUpModalIsOpen={this.state.signUpModalIsOpen}
          handleSignUpOrLogIn={this.handleSignUpOrLogIn}
          updateMessage={this.updateMessage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isFormInvalid={this.isFormInvalid}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          passwordConf={this.state.passwordConf}
          message={this.state.message}
        />
        <LogIn
          toggleLogInModal={this.toggleLogInModal}
          logInModalIsOpen={this.state.logInModalIsOpen}
          handleSignUpOrLogIn={this.handleSignUpOrLogIn}
        />
        <Landing />
        <FeatureVideo
          videoList={this.state.videoList}
          handlePlayVideo={this.handlePlayVideo}
          videoPlayerIsOpen={this.state.videoPlayerIsOpen}
        />
        <VideoList
          videoList={this.state.videoList}
          listVideos={this.listVideos}
          handlePlayVideo={this.handlePlayVideo}
        />
        <About />

        <Videos
          videoList={this.state.videoList}
          listVideos={this.listVideos}
          handlePlayVideo={this.handlePlayVideo}
        />
        <VideoPlayer
          videoId={this.state.videoId}
          videoPlayerIsOpen={this.state.videoPlayerIsOpen}
          toggleVideoPlayer={this.toggleVideoPlayer}
          handlePlayVideo={this.handlePlayVideo}
        />
        <Subscribe
          handleEmailSubmission={this.handleEmailSubmission}
        />
        <SubscriptionSuccess
          thankYouModalIsOpen={this.state.thankYouModalIsOpen}
          toggleThankYouModal={this.toggleThankYouModal}
        />
      </div >
    );
  }
}

export default App;
