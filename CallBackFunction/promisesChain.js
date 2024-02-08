function fetchdata()
{
   return new Promise((resolve, reject) => {
    const data={name:"kalpana",age:"23"};
    resolve(data);
   })
}
function upData(data)
{
    return new Promise((resolve, reject) => {
        data.email="kalpana@gmail.com";
        resolve("promises 2 resolved");
    })
}
fetchdata()
.then((res)=>
    {console.log("fetched data success\n",res);
    return upData();
})
.then((upData)=>{
    console.log("updata is succes",upData);
    //return "updata is completed";
})
.then(finalres=>console.log("final result...",finalres))
    
.catch((error)=>console.log("promises failed",error));