
const express = require('express');
const router = express.Router();
// const serverless = require('serverless-http');
// const bodyParser = require('body-parser');
// const app = express();
const usersCtrl = require('../../controllers/users');

//      P U B L I C   R O U T E S
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

// app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router); //path must route to lambda

module.exports = router;
// module.exports = app;
// module.exports.handler = serverless(app);



