export class Chat {
    id?: string;
    name: string;
    message: string;
    uid?: string;
    date?: number;

    constructor(name, message, date){
        this.name = name;
        this.message = message;
        this.date = date;
    }
}
