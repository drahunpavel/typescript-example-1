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
var UserBuilder = /** @class */ (function () {
    function UserBuilder() {
    }
    UserBuilder.prototype.setName = function (n) {
        this.name = n;
        return this;
    };
    ;
    UserBuilder.prototype.isAdmin = function () {
        return this instanceof AdminBuilder;
    };
    return UserBuilder;
}());
var AdminBuilder = /** @class */ (function (_super) {
    __extends(AdminBuilder, _super);
    function AdminBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminBuilder;
}(UserBuilder));
var restt1 = new UserBuilder().setName("name"); // const restt1: UserBuilder
var restt2 = new AdminBuilder().setName("name"); // const restt2: AdminBuilder
var usertt = new UserBuilder();
if (usertt.isAdmin()) {
    console.log('admin: ', usertt);
}
else {
    console.log('user: ', usertt);
}
