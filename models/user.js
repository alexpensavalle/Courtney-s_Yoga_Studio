var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  subscriptionType: {
    type: String,
    enum: ['Bronze', 'Silver', 'Gold']
  },
}, {
  timestamps: true
})*/