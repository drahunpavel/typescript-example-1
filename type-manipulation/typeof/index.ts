let strOrNum: string | number;

if(Math.random() > 0.5){
    strOrNum = 5
}else{
    strOrNum = 'str'
}

// strOrNum - strOrNum: string | number


let strOrNum2: typeof strOrNum; // strOrNum2: string | number



const user9 = {
    name: 'str',
    age: 45
};

type keyOfUser = keyof typeof user9; //type keyOfUser = "name" | "age"


enum Direction {
    Up,
    Down
};

type keyOfDir = keyof typeof Direction; //type keyOfDir = "Up" | "Down"