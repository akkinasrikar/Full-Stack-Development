const { MongoTopologyClosedError } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitDB",{useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({  
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);


const fruit1 = new Fruit({
  name:"Peaches",
  rating: 10,
  review: "Peaches are so yummy!"
});

const fruit2 = new Fruit({
  name:"Apple",
  rating: 8,
  review: "Pretty solid as a fruit."
});

const fruit3 = new Fruit({
  name:"Orange",
  rating: 6,
  review: "Too sour for me."
});


const person = new Person({
  name: "John",
  age: 37,
  favouriteFruit: fruit1
});

const person2 = new Person({
  name: "Amy",
  age: 12
});


// fruit.save();
/*
Fruit.insertMany([fruit1,fruit2,fruit3], function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB");
  }
});


Person.insertMany([person, person2], function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully saved all the people to fruitsDB.");
  }
}
);
*/
/*
Person.find({ name: 'John'}, function (err, docs) {
  if (err){
      console.log(err);
  }
  else{
      console.log("First function call : ", docs);
  }
});

*/

/*
Person.find({},function (err, docs) {
  if (err){
      console.log(err);
  }
  else{
      docs.forEach(function (doc) {
          console.log(doc.name);
      });
  }
});

*/

Person.updateOne({name: "Amy"}, {favouriteFruit: fruit2}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});






