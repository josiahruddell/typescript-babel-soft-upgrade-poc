interface Test{
    message: string
}

export class Test1 implements Test {
    public message: string

    constructor(){
        this.message = 'This is a message from a ts class implementing an interface';
    }
}