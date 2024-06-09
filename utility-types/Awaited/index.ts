type A = Awaited<Promise<string>> 
/*
type A = string
*/

interface IMenu{
    name: string;
    url: string;
}

async function getMenu(): Promise<IMenu[]>{
    return [{name: 'name', url: 'url'}]
}

type R = Awaited<ReturnType<typeof getMenu>>
/*
type R = IMenu[]
*/



async function getArray<T>(x: T): Promise<Awaited<T>[]>{
    return [await x]
}