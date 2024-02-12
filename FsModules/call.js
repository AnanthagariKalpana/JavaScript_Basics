
function greet() {
    console.log(`hello,${this.name}`);
}

const person = { name: 'Alice' };
greet.call(person); // Outputs: Hello, Alice!


function greet1(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}

const person1 = { name: 'Bob' };
const args = ['Hi'];
greet.apply(person1, args); // Outputs: Hi, Bob!
