// декоратор, который добавляет свойства createdAt в класс

interface IUserService {
  users: number;
  getUserInDb(): number;
}

@CreatedAt
class ExampleClass2 implements IUserService {
  getUserInDb(): number {
    return this.users;
  }
  users: number = 1000;
}

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

console.log(new ExampleClass2());
