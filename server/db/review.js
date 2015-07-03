var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  // user id of user being reviewed
  taskRunner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  // user id of reviewer
  taskOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  // specific task completed
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },

  // rating: # of carrots out of 5
  carrots: Number, 

  // review text
  reviewBody: String,

  // date of review
  current_date: Date

});

module.exports = mongoose.model('Review', ReviewSchema);
