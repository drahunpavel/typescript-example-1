interface IUserService {
  users: number;
  getUserInDb(): number;
}

//   @nullUser2
@nullUserAdvanced
class UserService3 implements IUserService {
  users: number = 1000;

  getUserInDb(): number {
    return this.users;
  }
}

// декоррируем прототип свойства. Отрабатываем до выполнения класса
// function nullUser2(target: Function) {
//   target.prototype.users = 0;
// }

// декорируем поведение класса отнасладевовашись от него
function nullUserAdvanced<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    users = 0;
  };
}

console.log(new UserService3().getUserInDb());
