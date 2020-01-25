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
// import VideoList from '../../components/VideoList/VideoList';
import Videos from '../../components/Videos/Videos';
import VideosModal from '../../components/VideosModal/VideosModal';
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
      sublinerQuote: 'The trajectory of your life depends on your mindset.',
      sublinerNumber: 0,
      sublinerQuotes: [
        'Life is short.  No regrets.',
        'Better mindset = Better results.',
        'Don\'t "Just do it". Do "The right things".',
        'Where you end up depends on entirely on your thoughts.',
        'Life doesn\'t have to be difficult.',
        'Your mindset is a small thing that makes a huge difference.',
        'Nearly everything you need just needs to be reminded.',
        'Simple habits lead to extraordinary results.',
        'Life = Thoughts.'
      ],
      videoPlayerIsOpen: false,
      signUpModalIsOpen: false,
      logInModalIsOpen: false,
      dropdownOpen: false,
      mobileNavIsOpen: false,
      userDropdownIsOpen: false,
      thankYouModalIsOpen: false,
      updateNav: false,
      videosModalIsOpen: false,
      viewDropdownOpen: false,
      viewThumbnail: true
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
    console.log('handleSignup or login called in app');
    this.setState({
      user: userService.getUser()
    }
    );
  }




  //     S U B L I N E R   Q U O T E S 
  //  Loop through quotes in state every 5 seconds
  subLinerTimer = () => {
    let timer = new Promise(resolve => {
      setTimeout(() => resolve(), 5000);
    })
    timer.then(() => {
      this.state.sublinerNumber > 8 ? this.setState({ sublinerNumber: 0 }) :
        this.setState({
          sublinerNumber: this.state.sublinerNumber + 1,
          sublinerQuote: this.state.sublinerQuotes[this.state.sublinerNumber]
        });
    })
  }



  //      V I D E O S
  //  List latest channel videos from Youtube API onto home page
  listVideos = async () => {
    let videoList = await videoService.getChannelVideos();
    // Filter out Dale Carnegie Principle Videos
    let filteredVideoList = videoList.items.filter(video => {
      return !video.snippet.title.includes('Principle')
    });
    this.setState({
      videoList: filteredVideoList
    });
  }

  toggleViewDropdown = () => {
    this.setState({
      viewDropdownOpen: !this.state.viewDropdownOpen
    })
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
    });
  }

  toggleVideosModal = () => {
    this.setState({
      videosModalIsOpen: !this.state.videosModalIsOpen
    });
  }

  toggleViewState = () => {
    this.setState({
      viewThumbnail: !this.state.viewThumbnail
    })
  }









  //      E M A I L   S U B S C R I P T I O N

  handleEmailSubmission = async newEmailData => {
    const newEmail = await subscriptionService.create(newEmailData);
    console.log('newEmail from handleEmailSubmission in App', newEmail)
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
          toggleLogInModal={this.toggleLogInModal}
          toggleSignUpModal={this.toggleSignUpModal}
          handleLogOut={this.handleLogOut}
          dropdownOpen={this.state.dropdownOpen}
          toggleNavItem={this.toggleNavItem}
          toggleMobileNav={this.toggleMobileNav}
          mobileNavIsOpen={this.state.mobileNavIsOpen}
          toggleUserDropdown={this.toggleUserDropdown}
          userDropdownIsOpen={this.state.userDropdownIsOpen}
        />
        <MobileNav
          user={this.state.user}
          toggleMobileNav={this.toggleMobileNav}
          mobileNavIsOpen={this.state.mobileNavIsOpen}
          signUpModalIsOpen={this.state.signUpModalIsOpen}
          logInModalIsOpen={this.state.logInModalIsOpen}
          toggleLogInModal={this.toggleLogInModal}
          toggleSignUpModal={this.toggleSignUpModal}
          handleLogOut={this.handleLogOut}
        />
        <SignUp
          user={this.state.user}
          toggleSignUpModal={this.toggleSignUpModal}
          signUpModalIsOpen={this.state.signUpModalIsOpen}
          handleSignUpOrLogIn={this.handleSignUpOrLogIn}
        />
        <LogIn
          toggleLogInModal={this.toggleLogInModal}
          logInModalIsOpen={this.state.logInModalIsOpen}
          handleSignUpOrLogIn={this.handleSignUpOrLogIn}
        />
        <Landing
          sublinerQuote={this.state.sublinerQuote}
          sublinerQuotes={this.state.sublinerQuotes}
          loopSublinerQuotes={this.loopSublinerQuotes}
          subLinerTimer={this.subLinerTimer}
        />
        <FeatureVideo
          videoList={this.state.videoList}
          handlePlayVideo={this.handlePlayVideo}
          videoPlayerIsOpen={this.state.videoPlayerIsOpen}
        />
        {/*<VideoList
          videoList={this.state.videoList}
          listVideos={this.listVideos}
          handlePlayVideo={this.handlePlayVideo}
        />*/}
        <About />

        <Videos
          videoList={this.state.videoList}
          listVideos={this.listVideos}
          handlePlayVideo={this.handlePlayVideo}
          videosModalIsOpen={this.state.videosModalIsOpen}
          toggleVideosModal={this.toggleVideosModal}
          viewDropdownOpen={this.state.viewDropdownOpen}
          toggleViewDropdown={this.toggleViewDropdown}
          viewThumbnail={this.state.viewThumbnail}
          toggleViewState={this.toggleViewState}
        />
        <VideosModal
          videosModalIsOpen={this.state.videosModalIsOpen}
          toggleVideosModal={this.toggleVideosModal}
          videoList={this.state.videoList}
          listVideos={this.listVideos}
          handlePlayVideo={this.handlePlayVideo}
          viewDropdownOpen={this.state.viewDropdownOpen}
          toggleViewDropdown={this.toggleViewDropdown}
          viewThumbnail={this.state.viewThumbnail}
          toggleViewState={this.toggleViewState}
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
      </div>
    );
  }
}

export default App;
