import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
import './Videos.scss';

class Videos extends Component {
    render() {
        return (
            <div id='videos'>
                {/* {this.props.videoList} */}


                {this.props.videoList.items ? (
                    this.props.videoList.items.map((video, idx) => {
                        return (
                            <div key={idx}>
                                {/* <Link> */}

                                <img
                                    // onClick={() => (this.props.handlePlayVideo(video.items[0].id))}
                                    src={video.snippet.thumbnails.medium.url}
                                    alt='video'
                                ></img>
                                {/* <h3 onClick={() => (this.props.handlePlayVideo(video.items[0].id))}> */}
                                <h3>
                                    {video.snippet.title}
                                </h3>
                                <h2>{video.snippet.channelTitle}</h2>
                                <p>{video.snippet.description}</p>
                                {/* </Link> */}
                            </div>
                        );
                    })
                ) : (
                        <p>No videos yet</p>
                    )}
            </div>
        );
    }
}

export default Videos;