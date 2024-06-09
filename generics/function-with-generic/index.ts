// function logMiddleware(data: number | string): number | string{
//     console.log(data)
//     return data
// }

function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const resg1 = logMiddleware(10); //const resg1: 10
const resg2 = logMiddleware("str"); //const resg2: "str"
const resg3 = logMiddleware<number>(10); //const resg3: number
const resg4 = logMiddleware<string>("str"); //const resg4: string




function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

getSplitedHalf<number>([1, 2, 3, 4]);




function convertToString<T>(data: T): string | undefined{
    if(Array.isArray(data)){
        return data.toString()
    }

    switch(typeof data){
        case 'string': 
            return data
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return data.toString()
        case 'object':
            return JSON.stringify(data)
        default:
            return undefined
    }
}

console.log(convertToString(1))
console.log(convertToString('string'))
console.log(convertToString(['a', 'b']))
console.log(convertToString({a: 'test'}))

//* можно дополнительно передать тип для каждого вызова метода. Если тип не передаем, ts подтягивает автоматически
console.log(convertToString<number>(1))
console.log(convertToString<string>('string'))
console.log(convertToString<Array<string>>(['a', 'b']))
console.log(convertToString<Record<string, string>>({a: 'test'}))

