function abc()
{
    console.log("abc function")
}

const xyz=()=>{
    return new Promise((resolve,reject)=>{
        let value=false
        if(value===true)
        {
            resolve(abc());
        }
        else{
            reject("promises rejected");
        }
    })
}
xyz().then((result)=>console.log("after resolve.......",result))
    .catch((error)=>console.log("After rejected.........",error))