class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const userCl1 = new User("Name");
console.log(userCl1);
userCl1.name = "New name";
console.log(userCl1);


class Admin {
    role: number
}

const adminCl1 = new Admin()
adminCl1.role = 1