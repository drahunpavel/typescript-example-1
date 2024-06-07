interface IUserO {
  login: string;
  password?: string;
}

const usero1 = {
    login: 'login',
    password: 'password'
}

const usero2 = {
    login: 'login',
}




function multiply(first: number, second?: number){
    if(!second) return first

    return first * second
}

multiply(2, 4)
multiply(2)