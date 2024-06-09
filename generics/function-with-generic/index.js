// function logMiddleware(data: number | string): number | string{
//     console.log(data)
//     return data
// }
function logMiddleware(data) {
    console.log(data);
    return data;
}
var resg1 = logMiddleware(10); //const resg1: 10
var resg2 = logMiddleware("str"); //const resg2: "str"
var resg3 = logMiddleware(10); //const resg3: number
var resg4 = logMiddleware("str"); //const resg4: string
function getSplitedHalf(data) {
    var l = data.length / 2;
    return data.splice(0, l);
}
getSplitedHalf([1, 2, 3, 4]);
function convertToString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(convertToString(1));
console.log(convertToString('string'));
console.log(convertToString(['a', 'b']));
console.log(convertToString({ a: 'test' }));
