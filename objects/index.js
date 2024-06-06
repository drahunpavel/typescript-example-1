function _getFullName(userEntity) {
    return "".concat(userEntity.firstName, " ").concat(userEntity.surname);
}
var getFullName = function (userEntity) { return "".concat(userEntity.firstName, " ").concat(userEntity.surname); };
var user = {
    firstName: 'firstName',
    surname: 'surname',
    age: 45
};
console.log(getFullName(user));
