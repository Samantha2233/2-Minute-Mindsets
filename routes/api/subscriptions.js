const express = require('express');
const router = express.Router();
const subscriptionsCtrl = require('../../controllers/subscriptions');

router.post('/', subscriptionsCtrl.create);

module.exports = router;