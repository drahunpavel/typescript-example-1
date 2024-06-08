abstract class Controller{
    abstract handle(req: any): void

    handleLog(req: any){
        console.log('start')
        this.handle(req)
        console.log('end')
    }
}

// new Controller() //!error: Cannot create an instance of an abstract class.ts(2511)

class UserController extends Controller{
    handle(req: any): void {
        console.log(req)
    }
    
}

const userac = new UserController()
// userac.handleLog
// userac.handle