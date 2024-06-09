const aa: number = Math.random() > 0.5 ? 1 : 0;

interface IHTTPResponse2<T extends 'success' | 'failed'> {
    code: number;
    // data: string | Error;
    // addData: string | number;
    data: T extends 'success' ? string : Error;
    addData: T extends 'success' ? string : number;
}

const newResp: IHTTPResponse2<'success'> = {
    code: 200,
    data: 'str',
    addData: 'str2'
}

const newResp2: IHTTPResponse2<'failed'> = {
    code: 200,
    data: new Error(),
    addData: 400
}