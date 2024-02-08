// function abc()
// {
//     console.log("abc function")
// }

// const xyz=()=>{
//     return new Promise((resolve,reject)=>{
//         let value=false
//         if(value===true)
//         {
//             resolve(abc());
//         }
//         else{
//             reject("promises rejected");
//         }
//     })
// }
// xyz().then((result)=>console.log("after resolve.......",result))
//     .catch((error)=>console.log("After rejected.........",error))

// function add(a,b)
// {
//     console.log(a+b);
// }

// let addOpe=()=>{
//     return new Promise((resolve, reject) => {
//         let a=6;
//         let b=6;
//         if(a == b)
//         {
            
//             resolve("promises full fill")
//             add(a,b)
//         }
//         else{
//             reject("A and B are not equal")
//         }
//     });
// };
// addOpe().then((res)=>console.log(res,"\nA and B are equal........"))
//     .catch((error)=>console.log(error,"\nPromises rejected......."))

function funAsync()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            let num1=5;
            let num2=10
            if(num1>num2)
            {
                resolve("Promises Success....")
            }
            else{
                reject("Promises are rejected.....")
            }
        }),4000; 
    })
    
}
funAsync().then(res=>console.log("Num1 is greater",res))
    .catch(error=>console.log("num2 is greater",error))
