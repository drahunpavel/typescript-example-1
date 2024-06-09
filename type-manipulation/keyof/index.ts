// позволяет вытащить ключи из класса, интерфейса и тд.

interface IUser8 {
  name: string;
  age: number;
}

interface ICar2 {
  new: boolean;
  run: number;
}

type KeyOfUser = keyof IUser8;

// const key: KeyOfUser = 'age'; age or name

function getValueKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user8: IUser8 = {
  name: "name",
  age: 34,
};

const car2: ICar2 = {
  new: false,
  run: 4554,
};

const value3 = getValueKey(user8, "age");
const value4 = getValueKey(car2, 'new');
//таким  образом, доступны key только конкретного объекта


// Группировка data2
interface IData{
    group: number,
    name: string
}

interface IGrpoup<T>{
    [key: string]: T[]
}

const data2: IData[] = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
    { group: 3, name: 'd' },
];

function groupData<T extends Record<string, any>>(arr: T[], key: keyof T): IGrpoup<T>{
    return arr.reduce<IGrpoup<T>>((map: IGrpoup<T>, item) => {
        const itemKey = item[key]
        let curEl = map[itemKey]
        if(Array.isArray(curEl)){
            curEl.push(item)
        }else{
            curEl = [item]
        }

        map[itemKey] = curEl;
        return map
    }, {})
}

const res3 = groupData(data2, 'group');
console.log('res3: ', res3)