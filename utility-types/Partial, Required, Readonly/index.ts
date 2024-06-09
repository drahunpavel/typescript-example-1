interface IUser9{
    name: string;
    age?: number;
    email: string
}

//* указать, что все свойства не обязательны
type UserPartial = Partial<IUser9>;
/*
type UserPartial = {
    name?: string | undefined;
    age?: number | undefined;
    email?: string | undefined;
}
*/

//* Указать, что все свойства обязательны
type required = Required<IUser9>
/*
type required = {
    name: string;
    age: number;
    email: string;
}
*/

//* Только чтение
type readonly = Readonly<IUser9>


type reqAndReadOnly = Required<Readonly<IUser9>>