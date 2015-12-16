var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClassName = (function () {
    function ClassName(a, b) {
        this.x = 10;
        this.y = 10;
        // console.log(a * this.x, b * this.y);
    }
    return ClassName;
})();
;
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
        this.m = 11;
        this.n = 11;
    }
    C.prototype.super = function () {
        console.log(this.m * this.y, this.n * this.x);
        return;

    };
    return C;
})(ClassName);


console.log(new C().super());