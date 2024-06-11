var UserService2 = /** @class */ (function () {
    function UserService2() {
        this.users = 1000;
    }
    UserService2.prototype.getUserInDb = function () {
        return this.users;
    };
    return UserService2;
}());
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('log users: ', obj.users);
    return obj;
}
console.log(new UserService2().getUserInDb());
console.log(logUsers(nullUser(new UserService2())).getUserInDb()); // использование декоратора nullUser, logUsers
