interface IUser {
  name: string;
  age: number;
  skills: string[];

  log: (id: string) => void;
}

const user4: IUser = {
  name: "name",
  age: 33,
  skills: ["1", "2"],
  log(id) {
    console.log(id);
  },
};

interface IRole {
  id: number;
}

//* Наследование от одного класса и добавление нового параметра
interface IUserWithRole extends IUser {
  id: number;
}
//* Наследование от двух классов без добавления нового параметра
interface IUserWithRole2 extends IUser, IRole {}

const user5: IUserWithRole = {
  name: "name",
  age: 33,
  skills: ["1", "2"],
  id: 4,
  log(id) {
    console.log(id);
  },
};

const user6: IUserWithRole2 = {
  name: "name",
  age: 33,
  skills: ["1", "2"],
  id: 4,
  log(id) {
    console.log(id);
  },
};

//* описание условного словаря 
interface IUserDict {
  [index: number]: IUser
}

type UserDictType = {
  [index: number]: IUser
}

type UserDictType2 = Record<number, IUser>