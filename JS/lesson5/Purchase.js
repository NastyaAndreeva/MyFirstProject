export class Purchase {
    constructor(name, type, count, sum, date = new Date()){
        historyPurchase.date = date;
        historyPurchase.name = name;
        historyPurchase.type = type;
        historyPurchase.count = count;
        historyPurchase.sum = sum;
    }
    
}