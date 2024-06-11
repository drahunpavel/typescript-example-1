//  Перехват ошибок

interface IUserService {
  users: number;
  getUserInDb(): number;
}

class ExampleClass implements IUserService {
  users: number;

  @CatchDecorator({reThrow: true})
  getUserInDb(): number {
    throw new Error("error");
  }
}

// function catchDecorator(reThrow: boolean = false) {
//   return (
//     target: Object,
//     _: string,
//     descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
//   ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//     // сохраняем старый метод, не переопределяем!
//     const oldMethod = descriptor.value;

//     // переопределение дескриптора
//     descriptor.value = async (...args: any[]) => {
//       try {
//         const res = await oldMethod?.apply(target, args);
//         return res;
//       } catch (e) {
//         if (e instanceof Error) {
//           console.log(e.message);
//           if (reThrow) {
//             throw e;
//           }
//         }
//       }
//     };
//   };
// }
// разделить на sync, async
function CatchDecorator({reThrow}: {reThrow: boolean} = {reThrow: false}) {
    return (
      target: Object,
      _: string,
      descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
      // сохраняем старый метод, не переопределяем!
      const oldMethod = descriptor.value;
  
      // переопределение дескриптора
      descriptor.value = async (...args: any[]) => {
        try {
          const res = await oldMethod?.apply(target, args);
          return res;
        } catch (e) {
          if (e instanceof Error) {
            console.log(e.message);
            if (reThrow) {
              throw e;
            }
          }
        }
      };
    };
  }

console.log(new UserService5().getUserInDb());
