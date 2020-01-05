const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login
};

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        console.log(user);
        const token = createJWT(user);
        console.log(token);
        res.json({ token });
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json({ err: 'The email or password you had entered is incorrect.' });
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user);
                res.json({ token });
            } else {
                return res.status(401).json({ err: 'The password you entered is incorrect.' });
            }
        });
    } catch (err) {
        return res.status(401).json(err);
    }
}

//     H E L P E R   F U N C T I O N S

function createJWT(user) {
    return jwt.sign(
        { user },
        SECRET,
        { expiresIn: '24h' }
    );
}