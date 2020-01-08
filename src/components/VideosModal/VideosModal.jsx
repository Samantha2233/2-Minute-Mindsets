import React, { Component } from 'react';
import './VideosModal.scss';

import { Button, Modal, ListGroup, ListGroupItem } from 'reactstrap';

class VideosModal extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.videosModalIsOpen}
          id='videos-modal'
        >
          <div className='videos-modal-hdr'>
            <h3>More Videos</h3>
          </div>
          <Button
            onClick={this.props.toggleVideosModal}
            isOpen={this.props.videosModalIsOpen}
            id='button-exit'>
            <img id="exit-video-player" src='../../../images/Exit-icon-purple.png' alt='exit icon' />
          </Button>
          <div className='videos-box'>
            {this.props.videoList ? (
              this.props.viewThumbnail ? (


                //////// THUMBNAIL VIEW
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
                          {video.snippet.description.substring(0, 60) + `...`}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (


                  ///////// LIST VIEW
                  this.props.videoList.map((video, idx) => {
                    return (
                      <div key={idx} class='list-view-video'>
                        <div >
                          <ListGroup>
                            <ListGroupItem>
                              <p></p>
                              <h6 onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}><i className="fab fa-youtube video-list-red"> </i> {video.snippet.title}</h6>
                              <p onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}>
                                {video.snippet.description.substring(0, 60) + '...'}
                              </p>
                            </ListGroupItem>
                          </ListGroup>
                        </div>
                      </div>
                    );
                  })
                )
            ) : (
                <div>
                  <Button>Load Vieos</Button>
                  {/* //TODO: Button to load videos if failed */}
                </div>
              )}
          </div>
          <div className='button-box'>
            <button id='youtube-btn'>
              <a href='https://www.youtube.com/channel/UCM9nVV4XuU_xmfMeibrCOoA' target='_blank' rel='noopener noreferrer'>Go to YouTube Channel</a>
            </button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default VideosModal;