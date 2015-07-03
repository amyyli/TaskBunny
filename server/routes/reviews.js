var db = require('../db/');
var _ = require('underscore');
var strToMongooseObjectId = require('mongoose').Types.ObjectId;

module.exports = function(app, express) {

  // return all reviews for specific user
  // where use is the taskRunner, reviewed by taskOwner
  app.get('/api/reviews', isAuthenticated, function(req, res) {

    db.Review.find({$and: [
      // find reviews of specific user (the task runner)
      {taskRunner: {$eq: req.user._id}}
    ]})
    .populate({
      path: 'taskRunner',
      select: 'name'
    })
    .populate({
      path: 'taskOwner',
      select: 'name'
    })
    .populate({
      path: 'task',
      select: 'information'
    })
    .populate('taskRunner taskOwner task') //?
    // .lean() //?
    .exec(function(err, reviews) {
      if (err) {
        res.status(500).end();
      } else {
        res.status(200).send(reviews);
      }
    })

  });

  // create new review
  app.post('/api/reviews', isAuthenticated, function(req, res) {
    var data = req.data;

    db.Review.create({
      taskRunner: new strToMongooseObjectId(data.runnerId),
      taskOwner: new strToMongooseObjectId(data.ownerId),
      task: new strToMongooseObjectId(data.taskId),
      carrots: data.carrots,
      reviewBody: data.body,
      current_date: new Date()
    }, function(err, review) {
      if (err) {
        res.status(500).end();
      } else {
        res.status(201).send(review);
      }
    });
  });

};

function isAuthenticated(req, res, next){
  if(req.isAuthenticated()) {
    next();
  } else {
    res.status(401).end();
  }
};
