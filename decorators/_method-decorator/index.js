var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserService5 = /** @class */ (function () {
    function UserService5() {
    }
    UserService5.prototype.getUserInDb = function () {
        throw new Error("error");
    };
    __decorate([
        log
    ], UserService5.prototype, "getUserInDb", null);
    return UserService5;
}());
function log(target, // объект, к которому относится сам метод, в нашем случае сам класс UserService5 
propertyKey, // в нашем случае название метода getUserInDb
descriptor) {
    console.log('target: ', target); // target:  { getUserInDb: [Function (anonymous)] }
    console.log('propertyKey: ', propertyKey); // propertyKey:  getUserInDb
    console.log('descriptor: ', descriptor); /*
    descriptor:  {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  }
    */
    descriptor.value = function () {
        console.log('No Error');
    };
}
console.log(new UserService5().getUserInDb());
