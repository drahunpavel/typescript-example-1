class UserBuilder {
  name: string;

  setName(n: string): this  {     //* спец тип this, ссылается на класс
    this.name = n;
    return this;
  };

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder
  }
}




class AdminBuilder extends UserBuilder{
    roles: string[]
}

const restt1 = new UserBuilder().setName("name"); // const restt1: UserBuilder
const restt2 = new AdminBuilder().setName("name"); // const restt2: AdminBuilder

const usertt: UserBuilder | AdminBuilder = new UserBuilder()

if(usertt.isAdmin()){
    console.log('admin: ', usertt)
}else{
    console.log('user: ', usertt)
}