interface IUserService {
  users: number;
  getUserInDb(): number;
}

// @nullUser3
@setUsers(2)
class UserService4 implements IUserService {
  users: number;

  getUserInDb(): number {
    return this.users;
  }
}

// function nullUser3(target: Function) {
//   target.prototype.users = 0;
// }

function setUsers(users: number) {
  return (target: typeof UserService4) => {
    target.prototype.users = users;
  };
}


console.log(new UserService4().getUserInDb());
