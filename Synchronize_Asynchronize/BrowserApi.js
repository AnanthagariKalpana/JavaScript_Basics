// function a()
// {
//     console.log("a is function");
// }function b()
// {
//     console.log("b is function");

// }
// function ab()
// {
//     console.log("ab function")
//     setTimeout(b,0)
//     a()
// }
// ab();

function myCalci()
{
    console.log(add(5,5));

}
function add(num1,num2)
{
    return num1+num2;
}
function print()
{
    console.log("Print Function")
}
setTimeout(print,0);
//print();
myCalci();



function hi()
{
    console.log("greeting hi");
}
function hello()
{
    console.log("greeting hello");
}
function ask()
{
    console.log("how are you");
}
hi()
setTimeout(hello,5000);
ask()
