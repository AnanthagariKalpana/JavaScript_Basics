//1....Await function 
function first()
{
    return new Promise((resolve) => {
        setTimeout(()=>
        {
            resolve(40);
        },1500);
    });
}
async function callBack()
{
    let a=6;
    console.log("calling");
    const res=await first()
    console.log("after resolve..",res);
    const finalres=res+a;
    console.log("final result is: ",finalres);
}
callBack();

//2.........
// function f1()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("f1 is resolved");
//         },2000);
//     });
// }
//  async function asyncFun()
// {
//     console.log("Asyncfun is started")
//     const res1=await f1()
//     console.log(res1);
// }
// asyncFun()

//3.........
//  function add(a)
// {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(a);
//         },4000);
//     });
// }
// async function asyncFun1()
// {
//     console.log("Start.....")
//     const result1= await add(5)
//     const result2=await add(10)
//     console.log(result1);
//     console.log(result2);
//     console.log("End.......")

// }
// asyncFun1()


//4.......
// function rejectAfter()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject("Promises is rejected")
//         });
//     },5000);
// }
// async function asyncReject()
// {
//     try{
//     console.log("started 4......");
//     const res=await rejectAfter();
//     console.log(res);
//     console.log("4 Ended.....")
//     }
//     catch{
//         console.log("4......error ")
//     }
// }
// asyncReject();

//5.........
function opt()
{
    return new Promise((resolve, reject) => {
        reject(new Error(message));
    })
}
async function optFun()
{
    try{
        console.log("started 5.......");
        const meg=await opt();
        console.log("5...Ended");
    }
    catch(error)
    {
        console.log("Error: ",error.message)
    }
}
optFun();
