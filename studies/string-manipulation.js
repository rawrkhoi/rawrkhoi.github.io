/* STRING MANIPULATION
 * Operators
 * String Methods
 */
 
 /* A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.
  * Each character in a string can be accessed by an index number.
  * All strings have methods and properties available to them.
  */
  
 
 // length tells you the length of the string
 
    var strLength = 'This is a string';
    console.log(strLength.length); // Outputs 16
    
 // Strings can be treated as an array of characters
    // In our var strLength, we can access a specific character by refering to the index position
    
    console.log(strLength[8]); // Outputs 'a'
    
 // Use the charAt() method to return the character using the index number as a parameter.
 
    'This is a string'.charAt(1);// Outputs 'h'
    
 // Use indexOf() to return the index number by the first instance of a character.
 
    'This is a string'.indexOf("s");
    //Although "s" appears more than once in the string, indexOf() will return the first instance.

 // Use lastIndexOf() to find the last instance
 
    'This is a string'.lastIndexOf("s");
    
 // The slice() method returns the characters between two index numbers.
    // The first parameter will be the starting index number
    // The second parameter will be the index number where it should end
    
    'This is a string'.slice(10, 16); // Outputs 'string'
    
    //if an end parameter is not entered, it will return everything after the start parameter
    
    'This is a string'.slice(8); // Outsputs 'a string'
    
 // toUpperCase() will convert all characters to uppercase characters.
    
    'This is a string'.toUpperCase();
 
 // toLowerCase() will convert all characters to lowercase characters.
    
    'This is a string'.toLowerCase();
    
 // string() will convert a string to an array. Within the (), you can speciy where to split.
    
    'This is a string'.split();     // Outputs an array with the entire stirng being one element
    'This is a string'.split('');   // Outputs each character into an element of an array
    'This is a string'.split(' ');  // Outputs each group of characters betwen ' ' into an element of an array
    
 // trim() will remove whitespaces from both ends of a string, but not in between. Whitespace can be tabs or spaces.
    
    var needsTrim = '       Woahhhh     ';
    console.log(needsTrim.trim()); // Outputs Woahhh
    
 // replace() can search a string for a value, and replace it with a new value.
 // The first parameter will be the value to be found, and the second parameter will be the value to replace it with.
    
    var originalString = "How are you?"

    // Replace the first instance of "How" with "Where"
    var newString = originalString.replace("How", "Where");

    console.log(newString);