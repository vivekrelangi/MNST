var Cse2 = /** @class */ (function () {
    function Cse2(name, pin) {
        //console.log('Welcome to constructor of demo class')
        this.name = name;
        this.pin = pin;
    }
    Cse2.prototype.disp = function (x) {
        console.log("Welcome to typescript class demo");
        console.log("Given name is " + this.name + " pin = " + this.pin + " number is " + x);
    };
    return Cse2;
}());
var c1 = new Cse2('vivek', 21);
var d = new Cse2('Durga', 515);
c1.disp(7);
d.disp(77);
