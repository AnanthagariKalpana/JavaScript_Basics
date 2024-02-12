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
// const arr1=new Array()
// arr1[0]="mango";
// arr1[1]="apple";
// arr1[2]="banana";
// for(let i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i]+"")
// }
// //3..............creating array and accessing the elements of it
// const std={name:"kalpana",age:23};
// console.log("Name: ",std.name);
// console.log("Age: "+std.age);


//4.........creating array and performing the pop()
// const arr=[]
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.unshift(40)//adds element to the beging of an array
// arr.splice(2,0,55);//insert the specific index
// arr.shift();//removes first Index Element
// arr.splice(2,1);//removes the 2index Ele
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

// //6..........Using FOR EACH Loop
// const colour=["red","yellow","green"]
// colour.forEach(colou => {
//     console.log(colou);
// });
//console.log(arr[0]," ",arr[1]," ",arr[2]);
//arr.pop();
//console.log(arr[0]," ",arr[1]," ",arr[2]);

//5.......
// const arr5=[]
// arr5[arr5.length]="Brinjal";
// arr5[arr5.length]="Potato";
// arr5[arr5.length]="Chilli";
// for(let i=0;i<arr5.length;i++)
// {
//     console.log(arr5[i]+"")
// }
// //6....Printing even number from array
// const arr6=[11,12,13,14,15,16,17,18,19,20]
// console.log("Even numbers of an array")
// for(let i=0;i<arr6.length;i++)
// {
//     if(arr6[i]%2==0)
//     {
//         console.log(arr6[i])
//     }
// }

//7............filter the arr with the given condtion
// const num=[1,2,10,3,4,5]
// let newarr=num.filter(ele =>ele>3)
// let newarr2=num.map(ele=>ele*ele);
// let newarr3=num.slice(2);
// console.log(newarr);
// console.log(newarr2);
// console.log(newarr3);
// let obg={
//     name:'kalpana',
// }
const numbers=[1,2,3,4,5,];
console.log(numbers.toString());//using toString()

const fruits=["Apple"," Banana","orange"]
console.log(fruits.join(','))//using join()

const array1=[1,2,3];
const array2=[4,5,6];
console.log(array1.concat(array2))//Using concat method

const str="hello"
for(const char of str)
{
    console.log(char);
}

//flat()
const a1=[1,2,["one","two"]];
console.log(a1.flat());//output:[ 1, 2, 'one', 'two' ]

const a2=[1,2,["one","two",[5,6]]];
console.log(a2.flat());//output:[ 1, 2, 'one', 'two', [ 5, 6 ] ]


const a3=["kalpana","nandhu",[459,499,[90,86]]]
console.log(a3.flat(2));

//Split()
const a4=["ab","","abc"]
const sp=a4.map(s=>s.split(''))
console.log(sp);//[ [ 'a', 'b' ], [], [ 'a', 'b', 'c' ] ]

const a5=["ab","","abc"]
const s=a4.flatMap(s=>s.split(''))
console.log(s);//op:[ 'a', 'b', 'a', 'b', 'c' ]

//ES7 Induces().............
let arr = ['react', 'angular', 'vue'];
 
if (arr.includes('react'))
{
    console.log('react existence');
}

let sun=["java","python","csharp"];
if(sun.includes('testing'))
{
    console.log('testing Exists')
}
else{
    console.log('testing not exists');
}
