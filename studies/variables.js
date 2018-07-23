 /* VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

 // 1. Declaration //
   var myName;

  /* At the declaration phase, the variable myName is undefined because we have NOT initialized
   * it to anything
   */
   console.log(myName); // prints => undefined

  // A. Initialization or Assignment //
   myName = 'Josh';
   console.log(myName); // prints => Josh

  // B. Re-assignment //
   myName = 'Bob';
   console.log(myName); // prints => Bob

   // NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
    var myVariable = 1;
    var myVariable = true;
    var myVariable = "someString";

 // 2. Some Ways to Declare a Variable

  /* A. Variables declared with var:
   * Can be unassigned and reassigned to any value
   * They are hosted to the top of the function scope or global scope.
   */
 
    var yoo = 'booty';
 
  /* B. Variables declared with let:
   * Can be unassigned and reassigned to any value
   * Scoped to if statements, loops, or functionss
   * They are NOT hoisted to the top. They remain in the scope declared 
   */
 
    let ma = 'booty';
 
  /* C. Variables declared with const:
   * Must be assigned at declaration and cannot be reassigned
   * A constant  cannot be left unassigned
   * Scoped to if statements, loops, or functionss
   * They are NOT hoisted to the top. They remain in the scope declared 
   */
  
    const maaa = 'booty';
  
  
 // 3. Two Types of Hoisting

  /* A. Variable Declaration
  * When a variable is being declared using var, the variable is hoisted
  * to the top of the function scope or global scope.
  */
 
  // Output is undefined because only the variable and name was hoisted not the value
    console.log(scotch);

    var scotch = "Now it's defined!";

  // Outputs is "Now it's defined!"
    console.log(scotch);

  /* B. Function Declartation
   * When a fucnction is being declared, both the name of the function
   * and the function expression is being hoisted.
   */
 
    // Outputs Booya!!
     hoisted();

     function hoisted() {
        console.log("Booya!!");
     }
