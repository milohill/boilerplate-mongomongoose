require('dotenv').config();
const mongoose = require('mongoose');

// connect to the database
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// create a schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model('Person', personSchema);

// let Person;

const createAndSavePerson = async (done) => {
  const newPerson = new Person({
    name: 'David',
    age: 99,
    favoriteFoods: ['taco', 'noodle'],
  });

  try {
    const doc = await newPerson.save();
    done(null, doc);
  } catch (error) {
    done(error);
  }
};

const createManyPeople = (arrayOfPeople, done) => {
  
};

const findPeopleByName = (personName, done) => {
  done(null /* , data */);
};

const findOneByFood = (food, done) => {
  done(null /* , data */);
};

const findPersonById = (personId, done) => {
  done(null /* , data */);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  done(null /* , data */);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /* , data */);
};

const removeById = (personId, done) => {
  done(null /* , data */);
};

const removeManyPeople = (done) => {
  const nameToRemove = 'Mary';

  done(null /* , data */);
};

const queryChain = (done) => {
  const foodToSearch = 'burrito';

  done(null /* , data */);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

// ----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
