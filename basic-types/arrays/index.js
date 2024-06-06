var arr = ['str1', 'str2', 'str3', 'str4'];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item.toLowerCase());
}
var result = arr.filter(function (item) { return item !== 'str3'; }).map(function (item) { return item + '! '; }).reduce(function (a, b) { return a + b; });
console.log(result);
