var obj_a = {};
// obj_a.name = 'name' //!Property 'name' does not exist on type '{}'
assertsUser(obj_a);
obj_a.name = "name";
//Проверка объекта на его принадлежность к определенному типу
function assertsUser(obj) {
    if (typeof obj === "object" && !!obj && "name" in obj) {
        return;
    }
    throw new Error("not User");
}
