const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoId: String,
    title: String,
    description: String
}, {
        timestamps: true
    });

module.exports = mongoose.model('Video', videoSchema);