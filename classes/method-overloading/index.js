//перегрузка методов
var UserMo = /** @class */ (function () {
    function UserMo() {
    }
    UserMo.prototype.addSkill = function (skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    };
    return UserMo;
}());
