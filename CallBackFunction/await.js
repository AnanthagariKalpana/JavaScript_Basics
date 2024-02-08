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

function add(a,b)
{
    console.log(a+b);
}

let addOpe=()=>{
    return new Promise((resolve, reject) => {
        let a=6;
        let b=6;
        if(a == b)
        {
            add(a,b)
            resolve("promises full fill")
        }
        else{
            reject("A and B are not equal")
        }
    });
};
addOpe().then((res)=>console.log(res,"\nA and B are equal........"))
    .catch((error)=>console.log(error,"\nPromises rejected......."))
