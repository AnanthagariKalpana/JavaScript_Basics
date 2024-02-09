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
console.log(b)
//3............
const c=[1,5];
const d=[2,...c,3,4];
console.log(d);

//4........
const e=[10,50,-64,45];
console.log( Math.max(...e) );

const values = [11,87,25,55,-6,30];
console.log( Math.max(...values) );

const myObg={
    a1:1,
    b:2,
    c:3
};
const { a1, ...r}=myObg//destructuring the objects
console.log(a1);
console.log(r);

//Object.fromEntries()

const entries=new Map([
    ["name","kalpana"],
    ["age",23]
]);
const ob=Object.fromEntries(entries);
console.log(ob);