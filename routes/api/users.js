
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

//      P U B L I C   R O U T E S
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


module.exports = router;



