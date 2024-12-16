export class SimpleException extends Error {

    constructor(message: string) {
        super();
        this.name = "\nSimple Exception";
        this.message = message;
    }

}