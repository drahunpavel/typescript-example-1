// наследование

type PaymentStatusE = "new" | "paid";

class PaymentE {
  id: number;
  status: PaymentStatusE = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

class PersistedPayment extends PaymentE {
  dbId: string;
  paidAt: Date;

  constructor() {
    //* super. Обозначает, что обращемся к контруктору класса PaymentE и переопределяем его
    const id = Math.random();
    super(id);
  }

  save() {
    //save bd
  }

  //*  В метод pay должны аргументы передавать так, чтобы они были расширением метода pay основного класса PaymentE
  //   pay(date?: Date) {
  //     // this.status = "paid"; //! неккоректная реализация
  //     super.pay()
  //     if (date) this.paidAt = date;
  //   }

  //* используем override, те указываем явно, что данный метод наследудется от основного класса
  override pay(date?: Date) {
    super.pay();
    if (date) this.paidAt = date;
  }
}


