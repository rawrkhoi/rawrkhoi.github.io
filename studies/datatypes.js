/* DATATYPES:
 * 
 * 0. Numbers
 * 1. String
 * 2. Boolean
 * 3. undefined
 * 4. null
 * 5. NaN
 * 6. Array
 * 7. Object
 * 8. Function
 * 9. Infinity and -Infinity
 */
 
 // Two Different Datatypes
 
 // Primitive/Simple Datatypes = values of simple datatypes are passed to a function via copy
    // Meaning when assigning or passing, data is copied from one variable to the next
    // It does not hold, collect, or aggregate other values. 
 
    //  0. Numbers = any number

        var myNumber = 8;

    //  1. String = a string is anything between single ('') or double ("") quotes

        var myString = 'String';

    //  2. Boolean = is either true or false

        var myBoolean = true;
        
    //  3. undefined = is different from not defined. Undefined is considered a value
        
        var notDefined;
        console.log(notDefined);
        // Output will be undefined
        
    //  4. null = explicitly has to be assigned null; no value but it is considered a value
        
        var notNull;
        console.log(notNull)
        // Output will be undefined
        
        var myNull = null;
        console.log(null);
        // Output is null, not in a 'string'
    
    //  5. NaN = means not a number. Some math using a number and string can result in NaN
    
        console.log('cucumber' - 8);
        // Output is NaN
                

 // Complex Datatypes = aggregates other values and are of indefinite size
    // Data is copied via reference by storing the location of the datatype to refer too rather than storing the actual value
 
    //  6. Array = an organzied, index list using square brackets []; separate each element with a comma

        var myArray = [1, 'two', false, ['array', 'within', 'an array'], ]

    //  7. Object = an unorganized list of key & value pairs using squiggly braces {} 

        var myObject = {
            name: 'Josh',
            age: 26,
            married: true,
        };
 
    //  8. Function = encapsulates a block of code that can be executed whenever we needed
        
        function myFunction(){
            console.log('Shazam');
        }
        

    //  9.a Infinity = a numeric value that represents positive infinity.
        
        // Infinity is a variable in global scope.
            console.log(Infinity);
        
        // The value Infinity is greater than any other number. 
    
    //  9.b -Infinity = a numeric value that represents negative infinity.
    
    