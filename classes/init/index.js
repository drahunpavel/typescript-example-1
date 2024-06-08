var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var userCl1 = new User("Name");
console.log(userCl1);
userCl1.name = "New name";
console.log(userCl1);
var Admin = /** @class */ (function () {
    function Admin() {
    }
    return Admin;
}());
var adminCl1 = new Admin();
adminCl1.role = 1;
