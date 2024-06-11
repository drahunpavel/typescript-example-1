interface IUserService {
  users: number;
  getUserInDb(): number;
}

class UserService5 implements IUserService {
  users: number;

  @Log
  getUserInDb(): number {
    throw new Error("error");
  }
}

function Log(
  target: Object, // объект, к которому относится сам метод, в нашем случае сам класс UserService5 
  propertyKey: string, // в нашем случае название метода getUserInDb
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  console.log('target: ', target); // target:  { getUserInDb: [Function (anonymous)] }
  console.log('propertyKey: ', propertyKey); // propertyKey:  getUserInDb
  console.log('descriptor: ', descriptor); /*
  descriptor:  {
  value: [Function (anonymous)],
  writable: true,
  enumerable: true,
  configurable: true
}
  */
 descriptor.value = () => {
    console.log('No Error')
 }
}

console.log(new UserService5().getUserInDb());
