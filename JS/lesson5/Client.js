export class Client {
    constructor(name, surName, purchase = 0, amount = 0, goods = []) {
        this.name = name;
        this.surName = surName;
        this.purchase = purchase;
        this.amount = amount;
        this.goods = goods;
    }
}