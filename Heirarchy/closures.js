//A closure is created when a function is defined within another function (the outer function) 
//and has access to variables in the outer function's scope, even after the outer function has finished executing.
function outerFunction() {
    const outerVariable = 'I am from outerFunction';
    
    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }
    
    return innerFunction;
}

const innerFunc = outerFunction(); // innerFunc now holds a reference to innerFunction
innerFunc(); // Output: "I am from outerFunction"


function greet()
{
    const fore="gud morning";
    function ingreet()
    {
           console.log(fore);
    }
    return ingreet;
}
const ingreet=greet();
ingreet();