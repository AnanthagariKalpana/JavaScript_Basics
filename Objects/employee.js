class Employee{
    constructor(name,age,empId)
    {
        this.name=name;
        this.age=age;
        this.empId=empId;
    }
    work()
    {
        console.log("doing work ",this.name);
    }
    details()
    {
        return ("name:"+this.name)
    }
}
emp=new Employee("nandhu",23,4356);
emp.work();
console.log(emp.details());