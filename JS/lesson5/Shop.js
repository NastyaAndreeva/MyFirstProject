import {Purchase} from './Purchase'

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
        
        let productToSell = this.goods.filter(goods => goods.name == item);
        // if (!productToSell){
        //     return 'Товара ${item} нет на складе!';
        // }
            
        // if (productToSell.length < count){
        //     return 'Товара ${item} не хватает на складе!';
        // }
            
        this.goods.splice(0, productToSell.length - count);
        productToSell.forEach(p => {
            this.deleteGoods(p);
        })
        this.clients[this.clients.indexOf(client)].purchase += count * item.value;
        this.clients[this.clients.indexOf(client)].amount += count;
        this.clients[this.clients.indexOf(client)].goods.push(item.name);

        let sum = count * item.value;
        this.addPurchases(new Purchase(client.name, type, count, sum));
    }

    countSell(){
        let count = 0;
        this.purchases.map((element) => {
            count += element.count;
        })
    
        return `Количество проданного товара: ${count}`;
    }

    sumSell(){
        let sum = 0;
    
        this.purchases.map((element) => {
            sum += element.sum;
        })
    
        return `Сумма заработанных денег: ${sum}`;
    }

    countGoods(){
        return `Количество товара на складе: ${this.goods.length}`;
    }
    
    countSellTypeGoods(type){
        let count = 0;
        for (let key in this.purchases) {
            if (this.purchases[key].type == type) {
                count += this.purchases[key].count;
            }
        }
        return `Количество проданного товара типа ${type}: ${count}`;
    }
    
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