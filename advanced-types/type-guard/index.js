function isStringTg(x) {
    return typeof x === "string";
}
function isAdminTg(user) {
    return 'role' in user;
}
function isAdminTg2(user) {
    return user.role !== undefined;
}
