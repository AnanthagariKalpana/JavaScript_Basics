//1........promisesChaining : fecting the data and again updating the same data

// function fetchdata()
// {
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         const data={name:"kalpana",age:"23"};
//     resolve(data);
//    },4000);
// })
// }
// function upData(data)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.email="kalpana@gmail.com";
//         resolve(data);
//         }, 3000);
//     })
// }
// fetchdata()
// .then((res)=>
//     {console.log("fetched data success\n",res);
//     return upData(res);
// })
// .then((upData)=>{
//     console.log("updata is succes\n",upData);
//     return "updata is completed";
// })
// .then(finalres=>console.log("final result...",finalres))
    
// .catch((error)=>console.log("promises failed",error));



//2..........fecting the st1 and continuing the promises to fecth the st2...
function std()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let st1={id:"11",name:"amith",age:"30"}
            resolve(st1);
        })
    })
}
function upStd()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            let st2={id:"12",name:"ankith",age:"38"};
            resolve(st2);
        })
    })
}
std().then(res=>
    {
        console.log("student1 data..",res)
        return upStd();
})
    .then(upres=>console.log("student2 is added..",upres))
    .then(final=>console.log("promises chaining completed..",final))
    .catch(error=>console.log("promises filed...",error))





//3..........firstpromises is adding the ADD operation && continue the promises to do SUB operation
function add()
{
    return new Promise((resolve, reject) => {
        let a=10;
        let b=5;
        resolve(a+b);
    },1500);
}
function sub()
{
    return new Promise((resolve, reject) => {
        let a=15;
        let b=5;
        resolve(a-b);
    },1000);
}

add().then(res=>{
    console.log("Addition result is: ",res);
    return sub();
})
.then(res1=>console.log("Subtraction result is: ",res1))
.catch(error=>console.log("promises rejected...",error))
  