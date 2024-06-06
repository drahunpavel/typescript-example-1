//* ...boolean[] - произвольное кол-во boolean (наличие необязательно)
var tuple = [1, 'str', false, true];
var elem1 = tuple[0];
var elem2 = tuple[1];
tuple.push('test');
tuple.pop();
var el1 = tuple[0], el2 = tuple[1], el3 = tuple[2];
console.log(el1, el2, el3);
