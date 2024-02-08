// function greet()
// {
//     console.log("greeting");
// }
// function fornoon()
// {
//     console.log("Gud morning");
// }
// function noon()
// {
//     console.log("gud Afternoon");
// }
// greet()
// fornoon()
// noon()


// function deep()
// {
//     console.log("hello deep")
//     amith()
// }
// function amith()
// {
//     console.log("hello amith");
// }
// function ankith()
// {
//     console.log("hello Ankith")
//     deep()
// }
// ankith()

// function add()
// {
//     console.log(5+5);
// }
// function sub()
// {
//     console.log(10-5)
//     mul()
// }
// function mul()
// {
//     console.log(10*5);
//     add()
// }
// sub()

// function f1()
// {
//     console.log("f1 is executed");
//     f3()
//     console.log("f1 is finished");
// }
// function f2()
// {
//     console.log("f2 is executed");
// }
// function f3()
// {
//     console.log("f3 if executed");
//     f2()
//     console.log("f3 is finshed");
// }
// f1()


function pizza()
{
    console.log("pizza ordered");
    setTimeout(prepare,2000)
}
function prepare()
{
    console.log("pizza is preparing");
    setTimeout(eat,400);
}
function eat()
{
    console.log("eat pizza")
}
pizza()