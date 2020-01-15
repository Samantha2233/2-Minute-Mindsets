const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/videos');

router.use(require('../../config/auth'));
router.post('/', videosCtrl.getChannelVideos);
router.post('/', videosCtrl.getVideo);


module.exports = router;