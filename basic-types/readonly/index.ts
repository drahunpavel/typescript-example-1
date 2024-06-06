const tuple1: [number, string] = [1, 'str']
console.log('tuple1: ', tuple1)
//* Переопределение элемента кортежа 
tuple1[0] = 12
console.log('tuple1: ', tuple1)

const tuple2: readonly [number, string] = [1, 'str']
//* tuple2[0] = 12 Cannot assign to '0' because it is a read-only property