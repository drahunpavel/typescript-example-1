type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customer?: Modifier;
    project?: Modifier; 
}

type ModifierToAccess<Type> = {
    [Property in keyof Type]: boolean
};

type UserAccess = ModifierToAccess<UserRoles>;
/*
type UserAccess = {
    customer?: boolean | undefined;
    project?: boolean | undefined;
}
*/

//*  Делает все свойства обязательными
type ModifierToAccess2<Type> = {
    [Property in keyof Type]-?: boolean
};

type UserAccess2 = ModifierToAccess2<UserRoles>;
/*
type UserAccess2 = {
    customer: boolean;
    project: boolean;
}
*/


//Валидация формы

interface IForm{
    name: string;
    password: string;
}

const form: IForm = {
    name: 'name',
    password: '123'
}

const formValidation: Validation<IForm> = {
    name: {isValid: true},
    password: {isValid: false, errorMessage: 'error'}
}

type Validation<T> = {
    [K in keyof T]: {
        isValid: true    
    } | {
        isValid: false;
        errorMessage: string
    }
}