class Cse2{
    name:string;
    pin:number;
    constructor(name:string,pin:number){
        //console.log('Welcome to constructor of demo class')
        this.name = name;
        this.pin = pin;

    }
    disp(x:number):void{
        console.log("Welcome to typescript class demo");
        console.log("Given name is "+this.name+" pin = "+this.pin+" number is "+x);
    }
}
const c1 = new Cse2('vivek',21);
const d = new Cse2('Durga',515);
c1.disp(7);
d.disp(77);