function fetchAuth(url, method) { }
fetchAuth("sss", "post");
// fetchAuth('sss', 'str') //* Argument of type '"str"' is not assignable to parameter of type '"post" | "get"'
var method1 = "post";
// fetchAuth("sss", method1); //* Argument of type 'string' is not assignable to parameter of type '"post" | "get"'
//* Плохое, но решение - кастомизация типа через "as"
//! например let method1 = "test"; так же отработает
fetchAuth("sss", method1);
var method2 = "post";
fetchAuth("sss", method2);
