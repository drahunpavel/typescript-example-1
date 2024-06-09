// Ограничения
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
//Классы
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    return Car2;
}());
var Lsv = /** @class */ (function (_super) {
    __extends(Lsv, _super);
    function Lsv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lsv;
}(Car2));
function kmToMls(car) {
    car.run = car.run / 0.6;
    return car;
}
var car = kmToMls(new Car2());
var lsv = kmToMls(new Lsv());
function kmToMl2(car) {
    car.run = car.run / 0.6;
    return car;
}
kmToMl2({ run: 1 });
// Примитивы
function logId(id, addData) {
    console.log(id);
    console.log(addData);
    return { id: id, data: addData };
}
var data = [
    { id: 1, value: 'str1' },
    { id: 2, value: 'str2' },
    { id: 3, value: 'str3' }
];
function sortData(data, type) {
    if (type === void 0) { type = 'asc'; }
    return data.sort(function (a, b) {
        switch (type) {
            case 'asc': return a.id - b.id;
            case 'desc': return b.id - a.id;
            default:
                return a.id - b.id;
        }
    });
}
console.log(sortData(data));
console.log(sortData(data, 'desc'));
