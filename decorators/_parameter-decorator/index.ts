interface IUserService2 {
  getUsers(): number;
  setUsers(num: number): void;
}

class UserService7 implements IUserService2 {
  private _users: number;

  getUsers(): number {
    return this._users;
  }

  setUsers(@Positive() num: number): void{
    this._users = num
  }
}

function Positive() {
    return (
      target: Object, // UserService7
      propertyKey: string, // setUsers
      parameterIndex: number // на каком месте нахоидтся num в методе setUsers
    ) => {
        console.log('target', target)
        console.log('propertyKey', propertyKey)
        console.log('parameterIndex', parameterIndex)

  }
}

console.log(new UserService7());
