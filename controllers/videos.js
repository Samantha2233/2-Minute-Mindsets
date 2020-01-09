const fetch = require('node-fetch');
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
const CHANNEL_ID = 'UCM9nVV4XuU_xmfMeibrCOoA';

module.exports = {
    getChannelVideos,
    getVideo
}

// Get back a list of videos from youtube API (with channel id)
async function getChannelVideos(req, res) {
    console.log('PRINTS TO NODEMON SERVER getChannelVideos called in controllers');
    const url = `${BASE_URL}activities?part=snippet,contentDetails&channelId=${CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}&maxResults=50`;
    return res.json(await fetch(url).then(res => res.json()));
}

// Get back single video JSON from youtube API
async function getVideo(req, res) {
    const url = `${BASE_URL}videos?part=snippet&id=${req.body.videoId}&key=${process.env.YOUTUBE_API_KEY}`;
    return res.json(await fetch(url).then(res => res.json()));
}


