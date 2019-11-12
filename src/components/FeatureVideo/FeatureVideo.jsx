import React, { Component } from 'react';
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
                                        <img
                                            // onClick={() => (this.props.handlePlayVideo(video.items[0].id))}
                                            src={video.snippet.thumbnails.high.url}
                                            alt='video'
                                        ></img>
                                        {/* <h3>
                                            {video.snippet.title}
                                        </h3>
                                        <h2>{video.snippet.channelTitle}</h2>
                                        <p>{video.snippet.description}</p> */}
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