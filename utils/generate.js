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

      _.extend(user, attributes);
      console.log('Going to try and save: ', user);

      db.User.create(user, function(err){
        if(err) {
          console.log(err);
        }
      });
      console.log('Created user!');

      break;

    case 'task':
      // TODO
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

module.exports = generateRandom;
