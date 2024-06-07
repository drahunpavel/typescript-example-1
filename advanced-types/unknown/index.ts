let value1: unknown = 3;
value1 = ["str1", 'str2'];
value1 = 'str'
// let res1: string = value1 //! Type 'unknown' is not assignable to type 'string'

let value2: any = 3
value2 = ["str1", 'str2'];
value2 = 'str'
let res2: string = value2




type U1 = unknown | string; //*  U1 - unknown. Берется самый "широкий тип"
type U2 = unknown & string; //* U2 - string. Берется самый "узкий тип"
