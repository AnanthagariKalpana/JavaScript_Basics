//1........Creating an array and inserting one by one into array
// const arr=[];
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;
// arr[3]=4;
// arr[4]=5;
// console.log("the length of an array is: "+arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

//2...........creating an and using for loop to print
const arr1=new Array()
arr1[0]="mango";
arr1[1]="apple";
arr1[2]="banana";
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]+"")
}
//3..............creating array and accessing the elements of it
const std={name:"kalpana",age:23};
console.log("Name: ",std.name);
console.log("Age: "+std.age);


//4.........creating array and performing the pop()
const arr=[]
arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr[0]," ",arr[1]," ",arr[2]);
arr.pop();
console.log(arr[0]," ",arr[1]," ",arr[2]);

//5.......
const arr5=[]
arr5[arr5.length]="Brinjal";
arr5[arr5.length]="Potato";
arr5[arr5.length]="Chilli";
for(let i=0;i<arr5.length;i++)
{
    console.log(arr5[i]+"")
}
//6....Printing even number from array
const arr6=[11,12,13,14,15,16,17,18,19,20]
console.log("Even numbers of an array")
for(let i=0;i<arr6.length;i++)
{
    if(arr6[i]%2==0)
    {
        console.log(arr6[i])
    }
}