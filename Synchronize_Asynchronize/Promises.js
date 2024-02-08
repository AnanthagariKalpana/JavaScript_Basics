function first() {
    console.log('first function');
   }
   
   function second() { 
       console.log('second function');
   }
   
   function third() { 
       console.log('third function');
      
   }
   
   function main() {
     console.log('main');
   
     setTimeout(first, 5000);
     setTimeout(second, 3000);
   
     
     new Promise(function(resolve,reject)
     {
        resolve("resolved the issue");
     }).then(resolve => console.log(resolve))
    
     third();
   }
   
   
   main();

console.log("******************")
   function hello()
   {
    console.log("hello world");
   }
   new Promise(function(resolve,reject)
   {
    reject("reject the issue");
   }).catch(reject => console.log(reject));
   hello();
console.log("++++++++++++++++++++++++++++")
function fun() { 
    console.log('fun function');
    new Promise(function(resolve,reject)
{
 resolve("promises inside the FUN function");
}).then(resolve=>console.log(resolve));
}

function funmain() {
  console.log('funmain');
  
  new Promise(function(resolve,reject)
  {
     resolve("resolved the issue");
  }).then(resolve => console.log(resolve))
  new Promise(function(resolve,reject)
  {
   resolve("promises out side the funmain function");
  }).then(resolve=>console.log(resolve));
  fun();
}
funmain()


