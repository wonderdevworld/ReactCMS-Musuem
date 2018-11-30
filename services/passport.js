const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


/* incoming request --> passport --- route handler
                        /       \
                    /               \
            passport strat 1    passport strat 2
                |                       |
                |                       |
        verify user with        verify user with 
            a Jwt                a user and pass
*/

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    // verify this username and password, call done with the user
    // if it is the correct username and password
    // otherwise call done with false

    User.findOne({ email: email }, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }

        // compare passwords is 'password' equal to user.password
        // but it's hashed and salted? So we need to decode it
        user.comparePassword(password, function(err, isMatch) {
            if (err) { return done(err); }
            if (!isMatch) { return done(null, false); }

            return done(null, user);
        })

    })    
});

// Setup options for JWT strategy

// need to tell JWTStrategy where to find the JWT
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // see if user ID in the payload exists in our db
    // if it does, call 'done' with that other
    // otherwise, call done without a user object

    User.findById(payload.sub, function(err, user) {
        // 2nd arg is user obj if we found one
        // whoever gave us this token they are not authenticated
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })

});

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin);
