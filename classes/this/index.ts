// контекст 
class PaymentT {
    private date: Date = new Date()

    getDate(this: PaymentT, val: string){ //* this:PaymentT, подсказка для ts, что в данном методе мы работаем с контекстом PaymentT
        return this.date
    }

    getDateArrow = (val: string) => { //* Стрелочная функция не теряет контекст
        return this.date 
    }
}

const p = new PaymentT()

const userT = {
    id: 1,
    paymentDate: p.getDate.bind(p), //* bind(p) для сохранения контекста, bind передает контекст
    getDateArrow: p.getDateArrow
}

console.log(p.getDate('str'))
console.log(userT.paymentDate('str'))
console.log(userT.getDateArrow('str'))