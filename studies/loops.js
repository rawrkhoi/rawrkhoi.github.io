/* LOOPS
 * 0. For
 * 1. For-in
 * 2. While
 */
 
 // Loops are built in constructs of JavaScript
    //allows us to execute a block of code as many times as needed.
    
 // 0. For Loops
 
    for (var i = 0; i < 100; i++){
        console.log(i);
    }
    // for is the keyword for the loop declaration
    // i = 0; the start condition
    // i < 100; the stop condition
    // i++; the increment (i = i + 1)
    // console.log(i); is the code block that is executed until the stop condition is false

    // For Loops are used to loop over arrays
        var myArray = [1, 2, 3, 4, 5];
        
        for (var x = 0; x < myArray.length; x++) {
            console.log(myArray[i]);
        } // Loop will log each element of the array until x is no longer < length
          // To loop backwards, change the start and stop conidtion
        
 // 1. For-in Loops
    // Loops over objects, allows you to use the keys to retrieve the value
    
    var person = {
        nameFirst: 'Linda',
        nameLast: 'Tran'
    };
    
    for (var key in person) {
        console.log (person[key]);
    }
    // logs 'Linda' and 'Tran'
    
 // 2. While
    // While loops are for instances where the loop is based on if a condition is true or false
    
    var count = -1;
    while (count < 10) {
        console.log(count);
        count ++;
    }
    // The loop will continue to run until the condition in () is false