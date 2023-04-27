class Cse1{
    name:string;//property 1
    pin:number;//property 2
    constructor(name:string,pin:number){// constructor to initialise properties or variables in a class 
        this.name = name;
        this.pin = pin;

    }
    disp():void{
        console.log('given name is '+this.name +' with id '+this.pin);//method 
    }
}
const c = new Cse1('DURGA',105);
c.disp();