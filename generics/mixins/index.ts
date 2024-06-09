type Constructor = new (...args: any[]) => {}; //Пример самого простого конструктора, под который попадают все классы

type GConstructor<T> = new (...args: any[]) => T;

class List {
    constructor(public items: string[]){

    }
}

type ListType = GConstructor<List>;


// получпние 1го элемента из списка с помощью extends
class ExtendListClass extends List{
    first(){
        return this.items[0]
    }
}

// получение 1го элемента с помощью миксина
function ExtendList<TBase extends ListType>(Base: TBase){
    return class ExtendListClass extends Base{
        first(){
            return this.items[0]
        }
    }
}

const list = ExtendList(List)
const resl = new list(['str1', 'str2', 'str3'])
console.log(resl.first())