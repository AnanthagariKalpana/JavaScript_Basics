class vehivle
{
    usage="Transpotation";
    start()
    {
        console.log("Vehicle is started")
    }
    stop()
    {
        console.log("vehilcle is stoped")
    }
}
class car extends vehivle
{
    wheels=4;
    drive()
    {
        console.log("Drive a car")
    }
    disp()
    {
        console.log("Wheels of car:",this.wheels);
        console.log("car is used for: ",this.usage);
    }
}

cr=new car();
cr.drive();
cr.disp();
