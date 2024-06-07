/*
 *ts указывает возвращаемый тип функции generateError void, тк как мы ничего не вернули
 * но данная функция никогда не вернется, поэтому правильно ее типизировать, как never
 */

function generateError(message: string): never {
  throw new Error(message);
}






type paymentAction = "refund" | "checkout";
// type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
  switch (action) {
    case "refund":
      break;
    case "checkout":
      break;
    default:
      //* данный never говорит о том, что мы никогда не попадаем в default
      //* но если мы расширим paymentAction reject и не обработаем reject через case
      //* то получим ошибку - Type 'string' is not assignable to type 'never'
      const _: never = action;
      throw new Error("no action");
  }
}





function isString(value: string | number): boolean {
  if (typeof value === "string") {
    return true;
  } else if (typeof value === "number") {
    return false;
  }

    //* ts в данном кейсе не будет ругаться, тк возвращаемый тип generateError - never.
    //* generateError бросит ошибку и мы выходим из функции isString
  generateError("error");
}


// never помогает ограничить кейсы, когда нам нужно явно проходить проверку по типам, и блокировать какой-либо кейс, если мы не хотим в него попасть