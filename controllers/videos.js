const fetch = require('node-fetch');
const Video = require('../models/video');
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
const CHANNEL_ID = 'UCM9nVV4XuU_xmfMeibrCOoA';


module.exports = {
    getChannelVideos,
    // video,
    // getVideos
}

// Get back a list of videos from youtube API (with channel id)
async function getChannelVideos(req, res) {
    console.log('getChannelVideos called in controllers');
    const url = `${BASE_URL}activities?part=snippet,contentDetails&channelId=${CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}&maxResults=50`;
    return res.json(await fetch(url).then(res => res.json()));
}


// Get back single video JSON from youtube API
// async function video(req, res) {
//     const url = `${BASE_URL}videos?part=snippet&id=${req.body.videoId}&key=${process.env.YOUTUBE_API_KEY}`;

//     return res.json(await fetch(url).then(res => res.json()));
// }

// Get all videos in DB and populate them as full objects
// async function getVideos(req, res) {
//     console.log('getVideos from controllers called');
//     let videos = await Video.find({})
//     console.log(videos);
//     console.log(promises);
//     const promises = videos.map(video => fetch(`${BASE_URL}activities?part=snippet,contentDetails&channelId=${CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}&maxResults=50`)
//         .then(res => res.json()));
//     const videosList = await Promise.all(promises);
//     res.json(videosList);
// }


