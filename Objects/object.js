const student=
{
    name:'Mohan',
    age: 30
};
console.log("Name: " ,student.name);
console.log("Age: ",student.age);

const person=
{
    name:'kalpana',
    age: 23,
    profession :'developer'
}
console.log("Name: " ,person.name);
console.log("Age: ",person.age);
console.log("Profession: ",person.profession)


function fun(name, age, marks)
{
    this.name=name;
    this.age=age;
    this.marks=marks;
}
const suresh=new fun("Suresh",24,453);
console.log(suresh.name," ",suresh.age," ",suresh.marks);

