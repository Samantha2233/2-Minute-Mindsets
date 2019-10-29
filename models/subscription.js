const mongoose = require('mongoose');


// Subscriptions without a user authenticated
const subscriptionSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    }
}, {
        timestamps: true
    });