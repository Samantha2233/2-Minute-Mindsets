import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
import './Videos.scss';

class Videos extends Component {
    render() {
        return (
            <div id="video-section">
                <div className='videos-box'>
                    {this.props.videoList.items ? (
                        this.props.videoList.items.map((video, idx) => {
                            return (
                                <div key={idx}>
                                    {idx <= 5 ?
                                        <div className='video'>
                                            <img
                                                // onClick={() => (this.props.handlePlayVideo(video.items[0].id))}
                                                src={video.snippet.thumbnails.medium.url}
                                                alt='video'
                                            ></img>
                                            <p>
                                                A small description of the video from youtube... sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
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
                            <>
                                {/* //TODO: Button to load videos if failed */}
                            </>
                        )}
                    <div className='button-box'>
                        <Button
                            id="more-videos-btn"
                            onClick={this.props.listVideos}
                        >View More Videos</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Videos;