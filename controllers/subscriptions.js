var Email = require('../models/subscription');

module.exports = {
    create
}

async function create(req, res) {
    const email = await Email.create(req.body);
    console.log(email);
    res.status(201).json(email);
}