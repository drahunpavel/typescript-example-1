function _getFullName(userEntity: {firstName: string, surname: string}): string {
    return `${userEntity.firstName} ${userEntity.surname}`
}

const getFullName = (userEntity: {firstName: string, surname: string}): string  => `${userEntity.firstName} ${userEntity.surname}`

const user = {
    firstName: 'firstName',
    surname: 'surname',
    age: 45
}

console.log(getFullName(user))