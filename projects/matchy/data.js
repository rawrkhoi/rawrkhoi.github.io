/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'fish';
animal['name'] = 'Koi';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'bubble bubble';
noises.push('blub');
noises.unshift('gargle');
noises[noises.length] = 'moo';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal['noises'].push('boop');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      a. Dot notation
        b. Bracket and quotes notation
 * 2. What are the different ways of accessing elements on arrays?
 *      a. Use the name of the array and in brackets the index # of the element
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'],
};
animals.push(duck);
console.log(animals);

var cow = {
    species: 'cow',
    name: 'Bell',
    noises: ['moo', 'mmm', 'ooo', 'ring-a-ding'],
};
animals.push(cow);
console.log(animals);

var fox = {
    species: 'fox',
    name: 'Beyonce',
    noises: ['reee', 'ahee', 'kekeke', 'eeek'],
};
animals.push(fox);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// An array would make an ordered list of friends with each friend being
// an object with its properties

var friends = [];
function getRandom(){
    return Math.floor(Math.random() * (animals.length));
}

var buddy = animals[getRandom()]
friends.push(buddy.name);
console.log(friends);
animal['friends'] = friends
console.log(animals);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
