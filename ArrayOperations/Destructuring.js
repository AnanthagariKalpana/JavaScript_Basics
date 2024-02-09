const arr=[1,2,3,4,5,]
const [one,two,three]=arr;
console.log(one);//1
console.log(two)//2
console.log(three)//3
//to skip certain elements
const [first, , ,fouth]=arr;
console.log(first," ",fouth)//1 4

//**********spread Operator(...)*********/
//1111111111...........
const students=["kalpana","nandhu"]
const people=["kaveri",...students,"janu","sushna"];
console.log(people);//[ 'kaveri', 'kalpana', 'nandhu', 'janu', 'sushna' ] 
//2.........
const a=["one","five"]
const b=["two",...a,"three","four"]
console.log(b)//op: [ 'two', 'one', 'five', 'three', 'four' ]
//3............
const c=[1,5];
const d=[2,...c,3,4];
console.log(d);//op:[ 2, 1, 5, 3, 4 ]

//4........
const e=[10,50,-64,45];
console.log( Math.max(...e) );//50

const values = [11,87,25,55,-6,30];
console.log( Math.max(...values) );//87

const myObg={
    a1:1,
    b:2,
    c:3
};
const { a1, ...r}=myObg//destructuring the objects
console.log(a1);
console.log(r);

//Object.fromEntries():transformer into a list of Key Value Pair

const entries=new Map([
    ["name","kalpana"],
    ["age",23]
]);
const ob=Object.fromEntries(entries);
console.log(ob);//op:{ name: 'kalpana', age: 23 } 

const ent=new Map([
    ["food","Biriyani"],
    ["drink","coc"]
])
const obj=Object.fromEntries(ent);
console.log(ent);//op:Map(2) { 'food' => 'Biriyani', 'drink' => 'coc' }     
console.log(obj);//{ food: 'Biriyani', drink: 'coc' }

//padStart()
const st="kalpana".padStart(19,"Ananthagari ");
console.log(st);
//padEnd()
const st1="kalpana ".padEnd(19,"Ananthagari")
console.log(st1);
//TrimStart()
let s1="  Hello World!  ";
console.log(s1.trimStart());
let s2="  hello world!  ";
console.log(s2.trimEnd())