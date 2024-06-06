type MethodType = "post" | "get";

function fetchAuth2(url: string, method: MethodType) {
  console.log(url, method);
}

fetchAuth2("sss", "post");

type UserType = {
  name: string;
  age: number;
  skills: string[];
};

const user2: UserType = {
  name: "name",
  age: 33,
  skills: ["1", "2"],
};

type RoleType = {
  id: number;
};

//* Intersection (Пересечение)
type UserWithRole = UserType & RoleType;

const user3: UserWithRole = {
  name: "name",
  age: 33,
  skills: ["1", "2"],
  id: 3,
};
