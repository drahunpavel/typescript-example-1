// Ограничения

//Классы
class Car2 {
  run: number;
}

class Lsv extends Car2 {
  copacity: number;
}

function kmToMls<T extends Car2>(car: T): T {
  car.run = car.run / 0.6;
  return car;
}

const car = kmToMls(new Car2());
const lsv = kmToMls(new Lsv());
// kmToMls({id: 1}) //!Error: Object literal may only specify known properties, and 'id' does not exist in type 'Car2'
// kmToMls({run: 1}) //* Ok


// Интерфейсы
interface IItem {
    run: number
}

interface IItem2 extends IItem{
    copacity: number;
}

function kmToMl2<T extends IItem>(car: T): T {
    car.run = car.run / 0.6;
    return car;
}

kmToMl2({run: 1})


// Примитивы
function logId<T extends string | number, Y>(id: T, addData: Y): {id: T, data: Y}{
    console.log(id);
    console.log(addData);
    return {id, data: addData};
}




const data = [
    {id: 1, value: 'str1'},
    {id: 2, value: 'str2'},
    {id: 3, value: 'str3'}
]

interface Idr {
    id: number
}

function sortData<T extends Idr>(data: T[], type: 'asc' | 'desc' = 'asc'): T[]{
    return data.sort((a, b) => {
        switch(type){
            case 'asc': return a.id - b.id
            case 'desc': return b.id - a.id
            default:
                return a.id - b.id
        }
    })
}

console.log(sortData(data))
console.log(sortData(data,'desc'))