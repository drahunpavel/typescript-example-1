class User9 {
    constructor(public id: number, public name: string){

    }
}


function getData(id: number): User9{
    return new User9(id, 'name')
}

//* Получаем возвращаемый тип
type RT = ReturnType<typeof getData>
/*
type RT = User9
*/
type RT2 = ReturnType<() => void>
/*
type RT2 = void
*/
type RT3 = ReturnType<<T>() => T>
/*
type RT3 = unknown
*/
type RT4 = ReturnType<<T extends string>() => T>
/*
type RT4 = string
*/

//* Получаем параметры типа
type PRM = Parameters<typeof getData>;
/*
type PRM = [id: number]
*/

//* Получение типа определенного параметра
type firstType = PRM[0];
/*
type firstParam = number
*/

//* Конструктор параметров
type CP = ConstructorParameters<typeof User9>
/*
type CP = [id: number, name: string]
*/