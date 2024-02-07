//Blocking methods excute in synchronized way
console.log("hi");
console.log("hello");
console.log("how are you");

//unblocking methods will excute in Non-Synchronize way

console.log("hi");
setTimeout( ()=>
{
    console.log("hello");
},5000);
console.log("how are you");
