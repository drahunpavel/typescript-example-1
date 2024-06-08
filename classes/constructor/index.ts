class UserC {
  name: string;
  age: number;

  //* сигнатура перезагрузки
  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);

  //* сигнатура реализации
  // послдений в списке constructor является конструктором имплементации (реализации)
  // те конструктор имплементации должен быть совместим со всеми контруктарами, которые были объявлены выше
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === "string") {
      this.name = ageOrName;
    } else if (typeof ageOrName === "number") {
      this.age = ageOrName;
    }
    if( typeof age === 'number'){
        this.age = age
    }
  }
}

const userC1 = new UserC("Name");
const userC2 = new UserC();
const userC3 = new UserC(33);
const userC4 = new UserC("Name", 33);
