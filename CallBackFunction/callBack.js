// function greet()
// {
//     console.log("hi");
// }
// function test(greet)
// {
//     console.log("gud morning");
//     greet();
// }
// test(greet);

function sayHello(name)
{
    console.log("hello"+name);
}
function fun(sayHello,name)
{
 sayHello(name)
}
fun(sayHello,"deep");
 
//Accepting the parameter a and b
function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
//cal function is Acepting the parameter a,b and also the ADD function 
//as a parameter
function cal(a,b,callback)
{
    return callback(a,b)
}
console.log(cal(10,20,add))

function main()
{
    return "main function";
}
function f1(callback)
{
    console.log( callback());
}
f1(main)