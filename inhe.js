var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mst = /** @class */ (function () {
    function mst() {
    }
    mst.prototype.disp = function () {
        console.log("welcome to meanstack theory");
    };
    return mst;
}());
var mstlab = /** @class */ (function (_super) {
    __extends(mstlab, _super);
    function mstlab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mstlab.prototype.rocks = function () {
        console.log("welcome to meanstack lab");
    };
    return mstlab;
}(mst));
var b = new mstlab();
b.disp();
b.rocks();
