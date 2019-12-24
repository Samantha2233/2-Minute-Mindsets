import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Videos.scss';

class Videos extends Component {
    render() {
        return (
            <div id="video-section">
                <h3>Latest Videos</h3>
                <div className='videos-box'>
                    {this.props.videoList.items ? (
                        this.props.videoList.items.map((video, idx) => {
                            return (
                                <div key={idx}>
                                    {idx <= 5 ?
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
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>

                            );
                        })
                    ) : (
                            <div>
                                {/* //TODO: Button to load videos if failed */}
                            </div>
                        )}
                    <div className='button-box'>
                        <Button
                            videosModalIsOpen={this.props.videosModalIsOpen}
                            onClick={this.props.toggleVideosModal}
                            id="more-videos-btn"
                        >View More Videos</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos;