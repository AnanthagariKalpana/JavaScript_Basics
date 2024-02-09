class developer{
    Profession="Developer";
    start()
    {
        console.log("Developer started coding")
    }
    comp()
    {
        console.log("Developer completed task")
    }
}
class softDevp extends developer{
    role="Software";
    task()
    {
        console.log("software Developer started the task");
    }
    devp()
    {
        console.log("Role of the dveloper: ",this.role);
        console.log("Profession :",this.Profession);
    }
}
class hardDevp extends developer{
    role="hardware";
    task()
    {
        console.log("hardware Developer started the task");
    }
    devp()
    {
        console.log("Role of the dveloper: ",this.role);
        console.log("Profession :",this.Profession);
    }
}
hd=new hardDevp()
hd.start();
hd.task();
hd.devp();
hd.comp();
sd=new softDevp()
sd.start();
sd.task();
sd.devp();
sd.comp();
