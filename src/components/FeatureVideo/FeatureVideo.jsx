import React, { Component } from 'react';
import './FeatureVideo.scss';

class FeatureVideo extends Component {
    render() {
        return (
            <div className='feature-box'>
                {this.props.videoList ? (
                    this.props.videoList.map((video, idx) => {
                        return (
                            <div key={idx}>
                                {idx <= 0 ?
                                    <div>
                                        <div className='overlay'>
                                            <div className='feature-video-overlay'
                                                onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}
                                            >

                                                <p
                                                    id="latest-video-button"
                                                    onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}
                                                >
                                                    Click to watch our latest two minute video :)
                                            </p>

                                            </div>
                                            <i className="fab fa-youtube feature-video-youtube-icon"
                                                onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}
                                            ></i>
                                            <img id='feature-img' src={video.snippet.thumbnails.maxres.url} alt='latest video' />
                                            <img src='../../../images/youtube-logo.png' alt='Youtube icon for play viedo'
                                                id='youtube-logo'
                                            />
                                        </div>









                                    </div>
                                    :
                                    <>
                                    </>
                                }
                            </div>
                        );
                    })
                ) : (
                        <div>
                            {/* <Button
                                onClick={this.props.listVideos}
                                type='submit'
                            >View YouTube Videos</Button> */}
                        </div>
                    )}
            </div>
        )
    }
}

export default FeatureVideo;