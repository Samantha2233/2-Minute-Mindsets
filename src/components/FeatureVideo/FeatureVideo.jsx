import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './FeatureVideo.scss';

class FeatureVideo extends Component {



    render() {
        return (
            <div className='feature-box'>
                {this.props.videoList.items ? (
                    this.props.videoList.items.map((video, idx) => {
                        return (
                            <div key={idx}>
                                {idx <= 0 ?
                                    <div>

                                        <div id='feature-content-box'>
                                            <Button
                                                id="latest-video-button"
                                                onClick={this.props.handlePlayVideo}
                                            >
                                                <i class="fab fa-youtube" id='youtube-icon'></i>
                                                Watch Latest Video
                                            </Button>
                                            <p id="feature-title">{video.snippet.title}</p>
                                        </div>


                                        {/* <div className='overlay'>
                                            <img id='feature-img' src={video.snippet.thumbnails.medium.url} alt='' />
                                        </div> */}
                                        {/* // onClick={() => (this.props.handlePlayVideo(video.items[0].id))} */}



                                        <img src='../../../images/youtube-logo.png' alt='Youtube icon for play viedo'
                                            id='youtube-logo'
                                        />
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