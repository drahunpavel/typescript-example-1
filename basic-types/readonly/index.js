var tuple1 = [1, 'str'];
console.log('tuple1: ', tuple1);
//* Переопределение элемента кортежа 
tuple1[0] = 12;
console.log('tuple1: ', tuple1);
var tuple2 = [1, 'str'];
//* tuple2[0] = 12 Cannot assign to '0' because it is a read-only property
