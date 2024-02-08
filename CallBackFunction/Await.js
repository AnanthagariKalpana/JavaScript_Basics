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
function f1()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("f1 is resolved");
        },2000);
    });
}
 async function asyncFun()
{
    console.log("Asyncfun is started")
    const res1=await f1()
    console.log(res1);
}
asyncFun()