var Cse1 = /** @class */ (function () {
    function Cse1(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    Cse1.prototype.disp = function () {
        console.log('given name is ' + this.name + ' with id ' + this.pin); //method 
    };
    return Cse1;
}());
var c = new Cse1('DURGA', 105);
c.disp();
