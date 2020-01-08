const express = require('express');
const router = express.Router();
// const serverless = require('serverless-http');
// const bodyParser = require('body-parser');
// const app = express();
const videosCtrl = require('../../controllers/videos');

router.use(require('../../config/auth'));
router.post('/', videosCtrl.getChannelVideos);
router.post('/', videosCtrl.getVideo);

// app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router); //path must route to lambda

module.exports = router;
// module.exports = app;
// module.exports.handler = serverless(app);