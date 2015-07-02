var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  // user id of user being reviewed
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  // user id of reviewer
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  // task reviewer completed
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },

  // rating: # of carrots out of 5
  carrots: Number, 

  // review text
  reviewBody: String,

  // date of review
  date: Date,

});

module.exports = mongoose.model('Review', ReviewSchema);
