class UserGt {
  //* свойства, которые хотим определить сеттерами, геттерами начинаем с _
  _login: string;
  _password: string;

  set login(l: string) {
    this._login = "user_" + l;
  }

  get login() {
    return this._login;
  }

  //* Сеттеры не могут быть асинхронными 
  //   set password(p: string) {
  //     this._password = '...'
  //   }

  async getPassword(p: string){
    // ...
  }
}

const userGt1 = new UserGt();
userGt1.login = "test";
