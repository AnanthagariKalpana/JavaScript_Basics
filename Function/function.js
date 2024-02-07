//Regular function
// function test()
// {
//     console.log("hello world! from regular fn");
// }
// test()
// //Arrow function
// let abc = () =>{
//     console.log("hello from array fn");
// }
// abc()
// //Anonymus Regfunction
// let ab=function(){
//     console.log("hello from anonymus Regfn");
// }
// //Anonymus Arrowfn
// ab()
// let a= ()=>
// {
//     console.log("hello from anonymus Arrowfn")
// }
// a()

let s=(x,y)=>console.log(x*y);
s(10,20)

function opt(x,y)
{
    console.log(" *****using regular function******")
    console.log("the arthimetic operation on:",x,y)
    console.log(" the addition is: ",x+y);
    console.log("the subtraction is: ",x-y);
    console.log("the multiplication is: ",x*y);
    console.log("the division is: ",x/y)
}
opt(20,10)

let logic=(a,b) =>
{
    console.log("comparing a and b")
    if(a>b)
    {
        console.log("a is greater: ",a)
    }
    else
    {
        console.log("b is greater: ",b);
    }
}
logic(5,2)