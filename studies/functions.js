/** FUNCTIONS
 * Encapsulates a block of code that can be executed whenever needed as many times needed
 */
 
 // Two Stages
    // 0. Function Declaration/Definition
        // Creates the action or instruction using parameters (placeholders)
        
        function add(para1, para2) {
            return para1 + para2;
        }   // para1 and para2 are the parameters in the function
            // inside the {} is the fucntion body or instructions
    
    // 1. Function Call/Invocation/Execution
        // Calling a function requires the function name and arguments (replaces the parameters)
        
        console.log(add(8, 10)); // Output is 18
        // the number of arguments should be th same as the number of parameters in the function
        
 // Named Functions
    // A function can be assigned to a variable and given a name just like any other value
    
    var subtract = function(a, b) {
        return a - b;
    };
    
    console.log(subtract(8, 7)); // Output is 1
    
 // Functions can reassign variables in scopes if the variable has been defined in the outer scopes
    
    function defined(parameter) {
        if (true){
            var message = 'Yay';
            console.log(message);
        } else {
            var message = 'Noo';
            console.log(message);
        } console.log (message); // message is undefined as the variable was hoisted to the function scope
    }                            // but not the value
    
    defined(true);      // Output is Yay
    // console.log(message);
    // Output is reference error as var message is never declared or hoisted into global scope.
    // It is only within the function 
    
 // Closures
    /* A closure is an inner function that has access to the outer function’s variables—scope chain.
     * You create a closure by adding a function inside another function.
     * The closure has three scope chains:
     *  - it has access to its own scope (variables defined between its curly brackets)
     *  - it has access to the outer function’s variables
     *  - it has access to the global variables
     * The inner function has access to the outer function’s variables and the outer function’s parameters.
     * The inner function cannot call the outer function’s arguments, however, it can call the outer function’s parameters directly.
     */
    
    // Closures have access to the outer function’s variable
        /* The inner function still has access to the outer function’s variables even after the outer function has returned.
         * When functions in JavaScript execute, they use the same scope chain that was in effect when they were created.
         * This means that even after the outer function has returned, the inner function still has access to the outer function’s variables.
         * Therefore, you can call the inner function later in your program.
         */
         
        function theName (firstName) {
            var nameIntro = "This person is ";
            // this inner function has access to the outer function's variables, including the parameter
            function lastName (theLastName) {
                return nameIntro + firstName + " " + theLastName;
            }
            return lastName;
        }

        var myName = theName("Josh"); // Here, the theName outer function has returned.
        // The closure (lastName) is called here after the outer function has returned above
        // The closure still has access to the outer function's variables and parameter
        console.log(myName ("Nguyen")); // Logs, "This person is Josh Nguyen"

    // Closures store references to the outer function’s variables not the actual value.
    
    // Closure Quirks
        /* Because closures have access to the updated values of the outer function’s variables
         * They can also lead to bugs when the outer function’s variable changes with a for loop
         */