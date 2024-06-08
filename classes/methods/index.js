var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Proccess"] = 1] = "Proccess";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }
    Payment.prototype.getPaymentLifeTime = function () {
        return new Date().getTime() - this.createdAt.getTime();
    };
    Payment.prototype.unholdPayment = function () {
        if (this.status === PaymentStatus.Proccess) {
            throw new Error("payment cannt be returned");
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    };
    return Payment;
}());
var payment = new Payment(1);
payment.unholdPayment();
console.log('payment: ', payment);
var time = payment.getPaymentLifeTime();
console.log('time: ', time);
