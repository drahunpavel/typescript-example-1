// наследование
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
var PaymentE = /** @class */ (function () {
    function PaymentE(id) {
        this.status = "new";
        this.id = id;
    }
    PaymentE.prototype.pay = function () {
        this.status = "paid";
    };
    return PaymentE;
}());
var PersistedPayment = /** @class */ (function (_super) {
    __extends(PersistedPayment, _super);
    function PersistedPayment() {
        //* super. Обозначает, что обращемся к контруктору класса PaymentE и переопределяем его
        var id = Math.random();
        return _super.call(this, id) || this;
    }
    PersistedPayment.prototype.save = function () {
        //save bd
    };
    //*  В метод pay должны аргументы передавать так, чтобы они были расширением метода pay основного класса PaymentE
    //   pay(date?: Date) {
    //     // this.status = "paid"; //! неккоректная реализация
    //     super.pay()
    //     if (date) this.paidAt = date;
    //   }
    //* используем override, те указываем явно, что данный метод наследудется от основного класса
    PersistedPayment.prototype.pay = function (date) {
        _super.prototype.pay.call(this);
        if (date)
            this.paidAt = date;
    };
    return PersistedPayment;
}(PaymentE));
