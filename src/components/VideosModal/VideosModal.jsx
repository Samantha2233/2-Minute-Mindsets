import React, { Component } from 'react';
import './VideosModal.scss';

import { Button, Modal } from 'reactstrap';

class VideosModal extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.videosModalIsOpen}
          id='videos-modal'
        >
          <h3>More Videos</h3>
          <Button
            onClick={this.props.toggleVideosModal}
            isOpen={this.props.videosModalIsOpen}
            id='button-exit'>
            <img id="exit-video-player" src='../../../images/Exit-icon-purple.png' alt='exit icon' />
          </Button>

          <div className='videos-box'>
            {this.props.videoList ? (
              this.props.videoList.map((video, idx) => {
                return (
                  <div key={idx}>
                    <div className='video'>
                      <div className='video-overlay'
                        onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}
                      >
                        <i className="fab fa-youtube videos-youtube-icon"></i>
                      </div>
                      <img
                        src={video.snippet.thumbnails.medium.url}
                        alt='video'
                        className='video-img'
                      ></img>
                      <p>
                        {video.snippet.description}
                      </p>
                    </div>
                  </div>

                );
              })
            ) : (
                <div>
                  {/* //TODO: Button to load videos if failed */}
                </div>
              )}
          </div>
        </Modal>
      </div>
    )
  }
}

export default VideosModal;