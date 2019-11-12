var Email = require('../models/subscription');

module.exports = {
    create
}

async function create(req, res) {
    const email = await Email.create(req.body);
    console.log('Prints in nodemon server', email);
    res.status(201).json(email);
}