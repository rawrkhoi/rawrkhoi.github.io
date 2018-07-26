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
    