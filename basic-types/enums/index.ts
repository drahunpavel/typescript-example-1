//* по умолчанию StatusCode.SUCCESS = 0, StatusCode.IN_PROCESS = 1 и тд
enum StatusCode {
    SUCCESS,
    IN_PROCESS,
    FAILED
}

enum Status {
    SUCCESS = 'success',
    IN_PROCESS = 'process',
    FAILED = 'failed'
}


function action(act: Status){
    console.log('action: ', act) 
}

action(Status.FAILED)
// action('failed') //* Argument of type '"failed"' is not assignable to parameter of type 'Status'



//* константное перечисление
const enum Status2 {
    SUCCESS = 'success',
    IN_PROCESS = 'process',
    FAILED = 'failed'
}

const value = Status2.SUCCESS