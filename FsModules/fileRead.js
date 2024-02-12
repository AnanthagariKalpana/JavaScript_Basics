// const fs = require('fs');
import fs from 'fs';
//Reading the file 
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//writing the data in file
fs.writeFile('file.txt',"who are you",(err,data)=>{
    if (err) throw err;
    console.log("data is written");
});

//writing the data in file
let data = "Hello, World!";
fs.writeFile('file.txt', data, err => {
    if (err) throw err;
    console.log('File written successfully');
});

//Appending the data 
let adddata="This is kalpana!";
fs.appendFile('file.txt',adddata,err=>{
    if(err)
    {
        console.log("error appending the file",err)
    }
    console.log("newdata is addede")
})

//Deleting the file

fs.unlink('file.txt',err=>{
    if(err)
    {
        console.log("file has not removed",err)
    }
    console.log("file is removed successfully......");
})

