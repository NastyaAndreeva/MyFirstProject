export class Purchase {
    constructor(client, type, count, sum, date = new Date()){
        this.date = date;
        this.client = client;
        this.type = type;
        this.count = count;
        this.sum = sum;
    }
}