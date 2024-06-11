interface IUserService {
  users: number;
  getUserInDb(): number;
}

class UserService6 implements IUserService {
  @Max(1000)
  users: number;

  getUserInDb(): number {
    throw new Error("error");
  }
}

function Max(max: number) {
  return (
    target: Object, // UserService6
    propertyKey: string // users
  ) => {
    let value: number;
    const setter = function (newVal: number) {
      if (newVal > max) {
        console.log("Error max val");
        return;
      }

      value = newVal;
    };

    const getter = function () {
      return value;
    };
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}


const class_ = new UserService6();
class_.users = 1;
console.log(class_.users)
class_.users = 2000
console.log(class_.users)
console.log(new UserService6().getUserInDb());
