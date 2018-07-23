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
        // Calling a function requires the function name and arguments (fills the parameters)
        
        console.log(add(8, 10)); // will log 18
        // the number of arguments should be th same as the number of parameters in the function
        