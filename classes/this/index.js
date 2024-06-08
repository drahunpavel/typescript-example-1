// контекст 
var PaymentT = /** @class */ (function () {
    function PaymentT() {
        var _this = this;
        this.date = new Date();
        this.getDateArrow = function (val) {
            return _this.date;
        };
    }
    PaymentT.prototype.getDate = function (val) {
        return this.date;
    };
    return PaymentT;
}());
var p = new PaymentT();
var userT = {
    id: 1,
    paymentDate: p.getDate.bind(p), //* bind(p) для сохранения контекста, bind передает контекст
    getDateArrow: p.getDateArrow
};
console.log(p.getDate('str'));
console.log(userT.paymentDate('str'));
console.log(userT.getDateArrow('str'));
