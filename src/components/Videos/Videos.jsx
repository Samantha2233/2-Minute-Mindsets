import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem } from 'reactstrap';
import './Videos.scss';

class Videos extends Component {
    render() {
        return (
            <div id='video-section'>
                <div id='video-panel'>
                    <div className='videos-hdr'>
                        <h3 className='h3'>Latest Videos</h3>
                        <ButtonDropdown
                            isOpen={this.props.viewDropdownOpen}
                            toggle={this.props.toggleViewDropdown}
                        >
                            <DropdownToggle caret size='sm'>View  <i className="fas fa-eye"></i>  </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.props.viewThumbnail ? this.props.toggleViewState : null}>List</DropdownItem>
                                <DropdownItem onClick={this.props.viewThumbnail ? null : this.props.toggleViewState}>Thumbnail</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    <div className='videos-box'>
                        {this.props.videoList ? (
                            this.props.viewThumbnail ? (


                                ///////// THUMBNAIL VIEW
                                this.props.videoList.map((video, idx) => {
                                    return (
                                        <div key={idx} className='video-div'>
                                            {idx <= 5 ?
                                                <div className='video'>
                                                    <div className='video-img-box'>
                                                        <div
                                                            onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}
                                                        >
                                                            <img
                                                                src={video.snippet.thumbnails.medium.url}
                                                                alt='video'
                                                                className='video-img'
                                                            ></img>
                                                            <div className='video-overlay'>
                                                                <i className="fab fa-youtube videos-youtube-icon"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        {video.snippet.description.substring(0, 60) + `...`}
                                                    </p>
                                                </div>
                                                :
                                                <div id='nothing'></div>
                                            }
                                        </div>
                                    );
                                })
                            ) : (



                                    /////////// LIST VIEW
                                    this.props.videoList.map((video, idx) => {
                                        return (
                                            <div key={idx} class='list-view-video'>
                                                {idx <= 5 ?
                                                    <div>
                                                        <ListGroup>
                                                            <ListGroupItem>
                                                                <p></p>
                                                                <h6 onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}><i className="fab fa-youtube video-list-red"> </i> {video.snippet.title}</h6>
                                                                <p onClick={() => (this.props.handlePlayVideo(video.contentDetails.upload.videoId))}>
                                                                    {video.snippet.description.substring(0, 60) + `...`}
                                                                </p>
                                                            </ListGroupItem>
                                                        </ListGroup>
                                                    </div>
                                                    :
                                                    <div className='nothing'>
                                                    </div>
                                                }
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
                        <div className='button-box'>
                            <Button
                                videosModalIsOpen={this.props.videosModalIsOpen}
                                onClick={this.props.toggleVideosModal}
                                id="more-videos-btn"
                            >View More Videos</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos;