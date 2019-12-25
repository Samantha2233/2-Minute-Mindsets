import React from 'react';
import './VideoList.scss';

const VideoList = (props) => {
    return (
        <div id='video-list-box'>
            <h3>More Videos</h3>
            {props.videoList ? (
                props.videoList.map((video, idx) => {
                    return (
                        <div key={idx}>
                            {idx <= 10 ?
                                <div className='list-row'
                                    onClick={() => (props.handlePlayVideo(video.contentDetails.upload.videoId))}
                                >
                                    <div className='row-for-highlight'>
                                        <i className="fab fa-youtube"></i>
                                    </div>
                                    <h6>{video.snippet.title}</h6>
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
                )
            }
            < div id='video-list-bg'></div>
        </div >
    )

}

export default VideoList;