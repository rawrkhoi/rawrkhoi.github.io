//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// or Object.values(object)
function objectValues(object) {
    var myArray = [];
    for (var key in object) {
        myArray.push(object[key]);
    } return myArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// or Object.keys(object)
function keysToString(object) {
    var myArray = [];
    for (var key in object) {
        myArray.push(key);
    } return myArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var myArray = [];
    for (var key in object) {
        if ((typeof object[key]) === (typeof 'string')) {
        myArray.push(object[key]);
        }
    } return myArray.join(" ");    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    if (Array.isArray(collection) === false) {
        return typeof collection;
    } else {
        return 'array';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var caps = string.split(" ");
    var array = [];
    for (var i = 0; i < caps.length; i++) {
        array.push((caps[i].charAt(0).toUpperCase()) + caps[i].slice(1));
    } return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let name = object.name;
    return "Welcome " + (name.charAt(0).toUpperCase() + name.slice(1, name.length)) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return (object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.length)) + ' is a ' + (object.species.charAt(0).toUpperCase() + object.species.slice(1, object.name.length));
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // check that object and object.noises are "something"
    if (object && object.noises) {
        // check that object.noises is an Array
        if (Array.isArray(object.noises)) {
            // check length
            if (object.noises.length > 0) {
                return object.noises.join(' ');
            }
        }
    }
    return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var array = string.split(' ');
    for (var i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return true;
        }
    } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return (object);
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    for (var keys in object) {
        for (var i = 0; i < object.friends.length; i++) {
            if (name === object.friends[i]) {
            return true;
            }
        }
    } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // return list
    let people = [];
    // loop over array
    for (var i = 0; i < array.length; i++) {
        let friend = array[i].friends;
        let isFriend = false;
        // checking we are not looking at same person's friend list
        if (array[i].name !== name) {
            // loop over friends of others
            for (var j = 0; j < friend.length; j++) {
                // if they have the person as a friend
                if (friend[j] === name) {
                    // they are friends
                    isFriend = true;
                }
            }
            // if person and others are not friends, add to people list
            if (!isFriend) people.push(array[i].name);
        }
    } return (people);
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    var obj = Object.keys(object);
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < obj.length; j++) {
            if (array[i] === obj[j]) {
                delete object[obj[j]];
            }
        }
    } return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
                newArray.push(array[i]);
        }
    } return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}