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
var P = /** @class */ (function () {
    function P() {
        this.num = 23;
        this.fisrtName = "Json";
        console.log("I am Parent class constrcutor");
    }
    return P;
}());
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super.call(this) || this;
        _this.m = 34;
        _this.n = 100;
        console.log("I am child class constrcutor");
        return _this;
    }
    return C;
}(P));
function main() {
    var c = new C();
    console.log(c.fisrtName);
    console.log(c.m);
}
main();
