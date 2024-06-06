//* ...boolean[] - произвольное кол-во boolean (наличие необязательно)

const tuple: [number, string, ...boolean[]] = [1, 'str', false, true]

const elem1 = tuple[0]
const elem2 = tuple[1]

tuple.push('test')
tuple.pop()

const [el1, el2, el3] = tuple

console.log(el1, el2, el3)