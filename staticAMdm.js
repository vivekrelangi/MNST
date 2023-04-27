var Demo = /** @class */ (function () {
    function Demo() {
        this.a = "durga";
    }
    Demo.a = "PRASAD";
    return Demo;
}());
console.log(Demo.a); //returns "PRASAD"
var cse = new Demo();
console.log(cse.a); //durga
