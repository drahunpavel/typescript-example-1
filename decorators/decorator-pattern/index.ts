interface IUserService {
  users: number;
  getUserInDb(): number;
}

class UserService2 implements IUserService {
  getUserInDb(): number {
    return this.users;
  }
  users: number = 1000;
}

function nullUser(obj: IUserService) {
  obj.users = 0;
  return obj;
}

function logUsers(obj: IUserService) {
  console.log("log users: ", obj.users);
  return obj;
}

console.log(new UserService2().getUserInDb());
console.log(logUsers(nullUser(new UserService2())).getUserInDb());
console.log(nullUser(logUsers(new UserService2())).getUserInDb()); // использование декоратора nullUser, logUsers
