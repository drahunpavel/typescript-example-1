interface IRole{
    name: string
}

interface IUser2{
    name: string,
    roles: IRole[]
}

const user10: IUser2 = {
    name: 'name',
    roles: []
}

const userName = user10['name'];
const rolesName = 'roles'

// получаем тип ролей пользователя

type rolesType = IUser2['roles']; //* type roleType = IRole[]. Здесь работа производится с типами
// type roleType2 = IUser2[rolesName]; //! не валидно. Здест работа производится с объектами



// создание юнион типа из string[]
const roles2 = ['admin', 'user', 'super'] as const;
type role2Types = typeof roles2[number]// type role2Types = "admin" | "user" | "super"