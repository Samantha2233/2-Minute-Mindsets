
const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/videos');

//      P R O T E C T E D    R O U T E S 

router.use(require('../../config/auth'));
router.post('/', videosCtrl.getChannelVideos);
// router.post('/video', videosCtrl.video);
// router.get('/', videosCtrl.getVideos);
// router.post('/search', checkAuth,  videosCtrl.search);


//      H E L P E R    F U N C T I O N S

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({ msg: 'Not Authorized' });
// }


module.exports = router;