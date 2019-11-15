import React from 'react';
import './VideoList.scss';

const VideoList = (props) => {
    return (
        <div id='video-list-box'>
            <h3>More Videos</h3>
            {props.videoList.items ? (
                props.videoList.items.map((video, idx) => {
                    return (
                        <div key={idx}>
                            {idx <= 10 ?
                                <div className='list-row'>
                                    <i class="fab fa-youtube"></i>
                                    <h6
                                        onClick={() => (props.handlePlayVideo(video.id))}
                                    >{video.snippet.title}</h6>

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