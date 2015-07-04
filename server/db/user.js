var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  googleId: { type: String, index: { unique: true } },
  name: String,
  email: String,
  memberSince: String,
  preferredEmail: {
    type: String,
    default: 'user@user.com'
  },
  phone: {
    type: String,
    default: '909-000-0000'
  },
  city: {
    type: String,
    default: 'San Francisco'
  },
  rating: {
    type: String,
    default: '* * * * *'
  },
  aboutMe: {
    type: String,
    default: 'About me big description About me big description About me big description About me big description About me big description About me big description About me big description About me big description About me big description'
  }
});

module.exports = mongoose.model('User', UserSchema);
