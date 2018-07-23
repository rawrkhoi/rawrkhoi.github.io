/* CONDITIONALS
 * 0. If
 * 1. Else-if
 * 2. Else
 * 3. Switch
 */
 
 // Conditionals allows control of the flow of our code
 
 // 0. If Statements
    // If the condition is true, the code in {} will run
    
    var a = 10;
    var b = 8;
    
    if (a > b) {
        console.log('a is bigger');
    }
    
    // As long as the condition is true, complete will be logged
    // If not, nothing happens
    
 // 1. Else-if Statements
    // Chains extra conditions in our statement to perform another code block if condition is met
    
    var b = 18;
    
    if(a > b) {
        console.log('a is bigger');
    } else if (b > a) {
        console.log('b is bigger');
    }
    
 // 2. Else Statements
    // Provides an alternative action if no conditions in the if statement and else-if statements are met
    
    var a = 18;
    var b = 18;
    
    if(a > b) {
        console.log('a is bigger');
    } else if (b > a) {
        console.log('b is bigger');
    } else {
        console.log('a and b are equal');
    }
    
 // 3. Switch Statements
    // Evaluates an input expression, matching the value to a case clause, and executes the associated statement
    // A break statement should end each case clause.
    // If not the next block will execute
    
    var age = 26;
    
    switch(age) {
        case (age < 21):
            console.log('No kids allowed');
            break;
        case (age > 21):
            console.log('Enjoy!');
            break;
        default:
            console.log('Let me see your ID');
    }   // Default statements are the same as else statements.
        // It is not necessary but if no conditions are met, the default will execute