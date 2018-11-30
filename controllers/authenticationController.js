const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

tokenForUser = (user) => {
    // don't use email, email's change over time
    // same with usernames

    // the subject of this token is this specific user
    const timestamp = new Date().getTime();

    // iat issued at time
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
    // already had their email and password auth'd
    // we just need to give them a token
    // req.user is our user obj supplied/written into req by passport done
    res.send({ token: tokenForUser(req.user) });
}


exports.signup = (req, res, next) => {
    console.log(req.body);

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must supply email and password'});
    }

    // see if a user with the fiven email exists
    User.findOne({ email: email }, (err, existingUser) => {
        if (err) { return next(err); }

        // if a user with email does exist, return an error
        if (existingUser) {
            // console.log('hi--------------------');
            return res.status(422).send({ error: 'Email is in use'});
        }

        // if a user with email does not exist, create and save user record
        const user = new User({
            email: email,
            password: password
        });

        // console.log('contorller:' + user.email);
        // this saves record to the db
        user.save((err) => {
            if (err) { return next(err); }

            // respond to request indicating the user was created
            res.json({ token: tokenForUser(user) });
        });
    });
}