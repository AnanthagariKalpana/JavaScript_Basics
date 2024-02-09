const person = {
    name: "John",               
    age: 30,                   
    address: {                 
        street: "123 Main St",  
        city: "Anytown",        
        country: "USA"          
    }
};
console.log(person.name);// Output: "John"
console.log(person.age);// Output: 30
console.log(person.address.street);// Output: "123 Main St"
console.log(person.address.city);// Output: "Anytown"
console.log(person.address.country);// Output: "USA"

function outerFunction() {
    const outerVariable = 'Outer';

    function innerFunction() {
        console.log(outerVariable); 
    }

    innerFunction(); 
}

outerFunction(); // Output: "Outer"

