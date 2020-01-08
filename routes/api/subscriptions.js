const express = require('express');
const router = express.Router();
// const serverless = require('serverless-http');
// const bodyParser = require('body-parser');
// const app = express();
const subscriptionsCtrl = require('../../controllers/subscriptions');

router.post('/', subscriptionsCtrl.create);

// app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router); //path must route to lambda

module.exports = router;
// module.exports = app;
// module.exports.handler = serverless(app);