// import tokenService from './tokenService';


// Get list of channel videos from Youtube API
async function getChannelVideos() {
    console.log('getChannelVideos called in videoService');

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log('approaching fetch in videoService');
    return fetch(`/api/videos`, options).then(res => res.json());
}



// Get a single video's information based on videoId
// async function getVideo(videoId) {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         },
//         body: JSON.stringify({ videoId: videoId })
//     };
//     return await fetch(`/api/videos/video`, options)
//         .then(res => res.json());
// }


// Get array of videos back from DB
// function getVideosList() {
//     console.log('getVideosList in videoService called');
//     const options = {
//         method: 'GET',
//         headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
//     };
//     return fetch(`/api/videos/`, options)
//         .then(res => res.json());
// }

export default {
    // getVideo,
    // getVideosList,
    getChannelVideos,
}