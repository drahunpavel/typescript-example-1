"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserService6 = /** @class */ (function () {
    function UserService6() {
    }
    UserService6.prototype.getUserInDb = function () {
        throw new Error("error");
    };
    __decorate([
        Max(1000)
    ], UserService6.prototype, "users", void 0);
    return UserService6;
}());
function Max(max) {
    return function (target, // UserService6
    propertyKey // users
    ) {
        var value;
        var setter = function (newVal) {
            if (newVal > max) {
                console.log("Error max val");
                return;
            }
            value = newVal;
        };
        var getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
var class_ = new UserService6();
class_.users = 1;
console.log(class_.users);
class_.users = 2000;
console.log(class_.users);
console.log(new UserService6().getUserInDb());
