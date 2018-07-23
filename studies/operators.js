 /* OPERATORS
  * 
  * 0. Assignment
  * 1. Arithmetic
  * 2. Comparison
  * 3. Logical
  * 4. Unary
  * 5. Ternary
  */
  
    // 0. Assignment
        // Assignment operator is the equal sign (=). It assigns the value of its right operand to the left operand
        
        var something = 8;
        
    // 1. Arithmetic
        // Arithmetic operators take values as ther oeprands and performs a claculation to return a value
        
        console.log(1 + 22 - 33 * 44);
        // Outputs a value of -1429
        
    // 2. Comparison
        // Comparison operators compare two values and evaluates it to a Boolean
        // To compare values use > < >= <= or === == !== !=
        // Use sctrict comparisons (===, !==) unless needing non-strict (==, !=)
        
        console.log(10 < 8);
        // Output is false
        
    // 3. Logical
        // Normally used with Boolean values and will return a Boolean
        // 3 Logical Operators
            // && The AND operator needs both conditions to be true in order to be true or execute
                
                console.log(3 > 1 && 1 < 2);
            
            // || The OR operator needs only one of the conditions to be true in order to be true or execute
            
                console.log(3 > 1 || 1 > 2);
            
            // ! The BANG operator flips the thurthiness of the value
            
                console.log(3 === '3'); //Outputs false
                console.log(3 !== '3'); //Outputs true
                
    // 4. Unary
        // An operation with only one operand and is evaluated before other operations
            // ! flips the truthiness before anything else
                console.log(true); // Outputs true
                console.log(!true);// Outputs false
                
            // - is a unary negation in case of subtraction a second - is used
                console.log(2 - 2); // Outputs 0
                console.log(2 - -2);// Outputs 4
                
            // typeof is an operator used to return a string that represents the value
                // exceptions are arrays, null, Date = will return object
                console.log(typeof 2); // Outputs number
                
    // 5. Ternary
        // An operator that takes three arguments.
            //The first argument is a comparison argument,
            //The second is the result upon a true comparison,
            //and the third is the result upon a false comparison.
        
        // Setup (condition) ? 'True' : 'False'
        var age = 26;
        var drinkAlcohol = (age > 21) ? "True, over 21" : "False, under 21";
        console.log(drinkAlcohol); // Outputs "True, over 21"