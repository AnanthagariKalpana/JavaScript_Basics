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
  