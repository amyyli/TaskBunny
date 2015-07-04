var db = require("../server/db/");
var _ = require("underscore");
var gen = require('./generate.js');

function countCollection(modelName, cb) {
  cb = cb || console.log;

  db[modelName].count({}, function(err, count) {
    cb(count);
  });
}

// Example: Count all instances of users.
// countCollection('User', function(count) {
//   console.log(count + ' instances of User');
// });

function dropCollection(modelName) {
  db[modelName].remove({}).exec();
}

// Example: Delete all instances of users.
// dropCollection('User');

function populateCollection(modelName, number, attributes) {
  for (var i = 0; i < number; i++) {
    gen(modelName, attributes);
  }
}

// Example: Add 10 randomly generated users to the Users collection.
// populateCollection('User', 10);

module.exports = {
  countCollection: countCollection,
  dropCollection: dropCollection,
  populateCollection: populateCollection
};
