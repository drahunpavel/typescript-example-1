interface IUserTg{
    name: string;
    age: string;
}

interface IAdminTg{
    role: number
}


function isStringTg(x: string | number): x is string {
  return typeof x === "string";
}

function isAdminTg(user: IUserTg | IAdminTg): user is IAdminTg{
    return 'role' in user
}

function isAdminTg2(user: IUserTg | IAdminTg): user is IAdminTg{
    return (user as IAdminTg).role !== undefined
}