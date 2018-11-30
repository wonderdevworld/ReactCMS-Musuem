const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model

// unique isn't case sensitive

const userSchema = new Schema({
    email: { 
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
},
{
    collection: "user"
});

// On Save Hook, encrypt password
// Before saving a model, run this function

// fat arrow function won't create a this so not good for constructors
userSchema.pre('save', function(next) {
    // this gets access to the user model
    console.log('what is this: ' + this);
    const user = this;

    // generate a salt then run callback
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }

        // hash (encrypt) our password using the salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }

            console.log(hash);
            // overwrite plain text password with encrypted password
            user.password = hash;

            console.log('---------------------');
            console.log('user: ' + user.email);
            console.log('pass:' + user.password);
            next();
        });

    });
});

userSchema.methods.comparePassword = function(canidatePassword, callback) {
    bcrypt.compare(canidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    })
}

// Create the model class
const user = mongoose.model('user', userSchema)

// Export the model
module.exports = user;