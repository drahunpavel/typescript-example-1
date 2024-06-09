// позволяет вытащить ключи из класса, интерфейса и тд.
// const key: KeyOfUser = 'age'; age or name
function getValuek(obj, key) {
    return obj[key];
}
var user8 = {
    name: "name",
    age: 34,
};
var car2 = {
    new: false,
    run: 4554,
};
var value3 = getValuek(user8, "age");
var value4 = getValuek(car2, 'new');
var data2 = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
    { group: 3, name: 'd' },
];
function groupData(arr, key) {
    return arr.reduce(function (map, item) {
        var itemKey = item[key];
        var curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
var res3 = groupData(data2, 'group');
console.log('res3: ', res3);
