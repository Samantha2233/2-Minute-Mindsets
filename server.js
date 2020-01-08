const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();

// const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();

//     D A T A B A S E
require('dotenv').config();
require('./config/database');

//     M I D D L E W A R E 
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); //path must route to lambda

//    A P I   R O U T E S  
// Keep above catch all!
app.use('/api/users', require('./routes/api/users'));
app.use('/api/videos', require('./routes/api/videos'));
app.use('/api/subscriptions', require('./routes/api/subscriptions'));


//    C A T C H   A L L 
// for a SPA's client-side routing to properly work
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//    S T A R T   S E R V E R
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log(`Express app running on PORT ${PORT}`)
});

module.exports = app;
module.exports.handler = serverless(app);