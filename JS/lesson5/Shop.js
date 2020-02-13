export class Shop {
    constructor(id) {
        this.id = id;
        this.goods = [];
        this.clients = [];
        this.purchases = [];
    }

    addPurchases(purchase){
        this.purchases.push(purchase);
    }
    addGoods(item, count = 1){
        for (let i = 1; i <= count; i++) {
            this.goods.push(item);
        }
    }

    deleteGoods(item, count = 1){
        this.goods.splice(this.goods.indexOf(item), count);
    }

    addClients(item) {
        this.clients.push(item);
    }

    deleteClient(index, count = 1){
        this.clients.splice(index, count);
    }

    sell(client, type, count, item){     
        this.goods.splice(this.goods.indexOf(item), count);
        this.clients[this.clients.indexOf(client)].purchase += count * item.value;
        // this.addPurchases(new Purchase(client, type, count, item));
    }

    // countSell(){
    //     let count = 0;
    
    //     this.History.map((element) => {
    //         count += element.count;
    //     })
    
    //     return `Количество проданного товара: ${count}`;
    // }

    // sumSell(){
    //     let sum = 0;
    
    //     this.History.map((element) => {
    //         sum += element.sum;
    //     })
    
    //     return `Сумма заработанных денег: ${sum}`;
    // }

    // countGoods(){
    //     return `Количество товара на складе: ${this.goods.length}`;
    // }
    
    // countSellTypeGoods(type){
    //     let count = 0;
    //     for (let key in this.History) {
    //         if (this.History[key].type == type) {
    //             count += this.History[key].count;
    //         }
    //     }
    //     return `Количество проданного товара типа ${type}: ${count}`;
    // }
    
    countTypeGoods(type){
        let count = 0;
        for (let key in this.goods) {
            if (this.goods[key].type == type) {
                count++;
            }
        }
        return `Количество товара на складе типа ${type}: ${count}`;
    }
}