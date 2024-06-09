interface IPaymentPersistent{
    id: number;
    sum: number;
    from: string;
    to: string;
}

//* Исключение свойства из типа (mapped types под капотом)
type Payment2 = Omit<IPaymentPersistent, 'id'>;

/*
type Payment2 = {
    sum: number;
    from: string;
    to: string;
}
*/

//* Берет указанные свойства из типа (mapped types под капотом)
type PaymentRequisites = Pick<IPaymentPersistent, 'from' | 'to'>;
/*
type PaymentRequisites = {
    from: string;
    to: string;
}
*/

//* (conditional types под капотом)
//* Вытаскиваем из union типа все свойства, которые являются string
type ExtractEx = Extract<'from' | 'to' | Payment2, string>;
/*
type ExtractEx = "from" | "to"
*/

//* (conditional types под капотом)
//* Исключаем из union типа все свойства, которые являются string
type ExcludeEx = Exclude<'from' | 'to' | Payment2, string>;
/*
type ExcludeEx = {
    sum: number;
    from: string;
    to: string;
}
*/