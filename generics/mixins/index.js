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
var List = /** @class */ (function () {
    function List(items) {
        this.items = items;
    }
    return List;
}());
// получпние 1го элемента из списка с помощью extends
var ExtendListClass = /** @class */ (function (_super) {
    __extends(ExtendListClass, _super);
    function ExtendListClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendListClass.prototype.first = function () {
        return this.items[0];
    };
    return ExtendListClass;
}(List));
// получение 1го элемента с помощью миксина
function ExtendList(Base) {
    return /** @class */ (function (_super) {
        __extends(ExtendListClass, _super);
        function ExtendListClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExtendListClass.prototype.first = function () {
            return this.items[0];
        };
        return ExtendListClass;
    }(Base));
}
var list = ExtendList(List);
var resl = new list(['str1', 'str2', 'str3']);
console.log(resl.first());
