class UserService {
    static db: any; //*  static не требует создание инстанса, можно обращаться просто как к объекту
    // private static db: any 

    static getUser(id: number){
        // return UserService.db...
    }

    create(){
        //* обращение к статичному методу внутри класса
        UserService.db
    }
}

// обращение к статическому свойству
UserService.db
UserService.getUser(1)

const inst = new UserService()
inst.create()
//! inst.getUser - нет доступа