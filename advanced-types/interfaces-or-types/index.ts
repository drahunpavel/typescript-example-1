interface IUserTi {
  name: string;
}

interface IUserTi {
  age: number;
}

//* В данном кейсе происходит мерж интерфейсов
//! bad practice
const userTi: IUserTi = {
  name: "name",
  age: 34,
};

/*
type UserTiType = {
  name: string;
}

type UserTiType = {
  age: number;
}

!error: Duplicate identifier 'UserTiType'
*/

//* union, intersection, простые типы можно сделать только через type
//* объекты, классы через interfaces
type ID = string | number

interface IDX {
  ID: string | number
}