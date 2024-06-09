class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E){
        if(data)
            this.data = data;
        if(error)
            this.error = error;
    }
}

const resp = new Resp<string, number>('data');



//class HTTPResp extends Resp{//! не может наследоваться от классов, которые имеют джинерики, без явного указания типов 
class HTTPResp<F> extends Resp<string, number>{
    code: F;

    setCode(code: F){
        this.code = code
    }
}

const resp2 = new HTTPResp();
