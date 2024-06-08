var UserService = /** @class */ (function () {
    function UserService() {
    }
    // private static db: any 
    UserService.getUser = function (id) {
        // return UserService.db...
    };
    UserService.prototype.create = function () {
        //* обращение к статичному методу внутри класса
        UserService.db;
    };
    return UserService;
}());
// обращение к статическому свойству
UserService.db;
UserService.getUser(1);
var inst = new UserService();
inst.create();
//! inst.getUser - нет доступа
