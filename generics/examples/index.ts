//* ex1. Ответ API

//--Обычное решение
interface UserResponse {
  status: number;
  data: { id: number; name: string };
}

const userResponse: UserResponse = {
  status: 200,
  data: { id: 1, name: "Name" },
};

//--Решение с дженериком
interface ApiResponse<T> {
  status: number;
  data: T;
}

const userSuccessResponse1: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "Name" },
};

const userSuccessResponse2: ApiResponse<{ id: number; price: number }> = {
  status: 200,
  data: { id: 1, price: 300 },
};

const userErrorResponse: ApiResponse<{ error: string }> = {
  status: 404,
  data: { error: "Error" },
};

//* ex2. Ключ-значение

//--Обычное решение
interface PairDefault {
  key: string;
  value: string;
}

const stringPair: PairDefault = {
  key: "key",
  value: "value",
};

//--Решение с дженериком

interface PairGeneric<K, V> {
  key: K;
  value: V;
}

const stringPair2: PairGeneric<string, string> = {
  key: "key",
  value: "value",
};

const stringPair3: PairGeneric<string, string | number> = {
  key: "key",
  value: 3,
};

//* ex3. Асинхронные методы

//--Обычное решение

async function fetchUser(url: string): Promise<{ id: number; name: string }> {
  return { id: 1, name: "Name" };
}

fetchUser("/api/user").then((user) => console.log(user));

//--Решение с дженериком

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData<{ id: number; name: string }>("/api/user")
  .then((user) => console.log(user))

fetchData<{ id: number; price: number }>("/api/product")
  .then((product) => console.log(product))
