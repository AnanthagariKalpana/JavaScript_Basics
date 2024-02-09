const student=
{
    name:'Mohan',
    age: 30
};
// console.log("Name: " ,student.name);
// console.log("Age: ",student.age);
for(const key in student)
{
    console.log(key+':'+student[key]);
}

const person=
{
    name:'kalpana',
    age: 23,
    profession :'developer'
}
// console.log("Name: " ,person.name);
// console.log("Age: ",person.age);
// console.log("Profession: ",person.profession)
for( const per in person)
{
    console.log(per ,":",person[per]);
}


function fun(name, age, marks)
{
    this.name=name;
    this.age=age;
    this.marks=marks;
}
const suresh=new fun("Suresh",24,453);
console.log(suresh.name," ",suresh.age," ",suresh.marks);

class Vehicle
{
    start()
    {
        console.log("Vehicle is started");
    }

}
veh=new Vehicle();
veh.start();

const person1={
    name: 'deep',
    age:30,
    salary:45000,
    greet:function(){
        return ('Hello, My name is '+person1.name);
    }
};
console.log(person1.name);
console.log(person1.age)
console.log(person1.salary);
console.log(person1.greet())