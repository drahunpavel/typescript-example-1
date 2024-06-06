const arr: string[] = ['str1', 'str2', 'str3', 'str4']

for(const item of arr){
    console.log(item.toLowerCase())
}

const result = arr.filter(item => item !== 'str3').map(item => item + '! ').reduce((a, b) => a + b)

console.log(result)