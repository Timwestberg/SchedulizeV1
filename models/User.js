const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports.CreateUser = (NewUser, cb) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("newUser.password", salt, function(err, hash) {
            // Store hash in your password DB.
            NewUser.password = hash;
            NewUser.save(cb)
        });
    });
}

module.exports.getUserbyUsername = function(username,cb) {
    let query = {username: username};
    User.findOne(query, cb);
}

module.exports.getUserbyId = function(id,cb) {
    User.findById(id,cb);
}

module.exports.comparePassword = function(potentialPassword,hash,cb) {
    bcrypt.compare(potentialPassword, hash, function(err, isMatched) {
        if(err) throw err;
        cb(null,isMatched)
    });
}