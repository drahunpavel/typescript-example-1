var UserC = /** @class */ (function () {
    //* сигнатура реализации
    // послдений в списке constructor является конструктором имплементации (реализации)
    // те конструктор имплементации должен быть совместим со всеми контруктарами, которые были объявлены выше
    function UserC(ageOrName, age) {
        if (typeof ageOrName === "string") {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === "number") {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
    return UserC;
}());
var userC1 = new UserC("Name");
var userC2 = new UserC();
var userC3 = new UserC(33);
var userC4 = new UserC("Name", 33);
