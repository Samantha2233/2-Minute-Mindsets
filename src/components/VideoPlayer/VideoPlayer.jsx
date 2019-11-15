import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import { Modal, Button } from 'reactstrap';
import './VideoPlayer.scss';

class VideoPlayer extends Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.videoPlayerIsOpen}
                    id='video-player-modal'
                >
                    <Button
                        onClick={this.props.toggleVideoPlayer}
                        isOpen={this.props.thankYouModalIsOpen}
                        id='button-exit'>
                        <img id="exit-video-player" src='../../../images/Exit-icon-white.png' alt='exit icon' />
                    </Button>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${this.props.videoId} `}
                        controls={true}
                        width={900}
                        height={550}
                    />
                </Modal>

            </div >
        )
    }

}

export default VideoPlayer;