var db = require("../server/db/");
var _ = require("underscore");

function generateRandom(modelName, attributes) {
  switch (modelName.toLowerCase()) {
    case 'user':
      var user = {
        googleId: randomString(10),
        name: randomBirdName(),
        email: 'user@user.com',
        memberSince: 'July 1st, 2015',
        preferredEmail: 'user@user.com',
        phone: randomPhoneNumber(),
        city: randomCityName()
      };

      if (attributes) {
        _.extend(user, attributes);
      }

      db.User.create(user, function(err){
        if(err) {
          console.log(err);
        }
      });

      break;

    case 'task':
      db.User.find({}, function(err, users) {
        var taskOwnerId = randomElement(users)['_id'];
        var taskRunnerId = randomElement(users)['_id'];

        var task = {
          owner: taskOwnerId, // user._id of creator of task
          information: {
            name: randomTaskName(),
            cost: _.random(1, 40),
            deadline: "07-06-2015",
            city: randomCityName(),
            description: "ayyyy",
            image: null
          }, // details of task (data from task creating form)
          applicants: [taskRunnerId], // array of individuals (user._id, as a string) applied for task 
          assignedTo: null, // user._id of user selected by owner to perform task
          complete: false // set to true by owner when task is complete
        };

        if (attributes) {
          _.extend(task, attributes);
        }

        db.Task.create(task, function(err){
          if(err) {
            console.log(err);
          }
        });
      });

      break;  
    default:
      console.log('No model by the name of ' + modelName);
  }
}

function randomString(length) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var result = '';

  for (var i = 0; i < length; i++) {
    result = result + alphabet[ _.random(25) ]; // Returns a random integer between 0 and 25.
  }

  return result;
}

function randomPhoneNumber() {
  var result = '';

  for (var i = 0; i < 10; i++) {
    result = result + _.random(0, 9);
  }

  return result;
}

function randomElement(array) {
  return array[ _.random(0, array.length - 1) ];
}

function randomBirdName() {
  return randomElement(birdNames);
}

function randomCityName() {
  return randomElement(cityNames);
}

function randomTaskName() {
  return randomElement(taskNames);
}

var birdNames = [
  "Steller's Eider",
  "Spectacled Eider",
  "King Eider",
  "Common Eider",
  "Harlequin Duck",
  "Surf Scoter",
  "White-winged Scoter",
  "Black Scoter",
  "Long-tailed Duck",
  "Bufflehead",
  "Common Goldeneye",
  "Barrow's Goldeneye",
  "Smew",
  "Hooded Merganser",
  "Common Merganser",
];

var cityNames = [
  "San Francisco",
  "New York City",
  "Tuscaloosa",
  "Los Angeles",
  "Denver",
  "Houston",
  "Chicago",
  "San Jose",
  "Newark",
  "Las Vegas",
  "Fargo",
  "Honolulu",
  "Key West",
  "Seussland"
];

var taskNames = [
  "Wash the dog",
  "Park the car in the yard",
  "Get me ice cream",
  "Pick up my dry cleaning",
  "Watch my nest",
  "Do my hiring assessment",
  "Write my code for me",
  "Come up with a better task name"
];

module.exports = generateRandom;
