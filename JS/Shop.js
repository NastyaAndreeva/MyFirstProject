const Shop = function (id) {
    this.id = id;
    this.goods = [];
    this.clients = [];
    this.History = [];

    this.addGoods = (item, count = 1) => {
        for (let i = 1; i <= count; i++) {
            this.goods.push(item);
        }
    }

    this.deleteGoods = (item, count = 1) => {
        this.goods.splice(this.goods.indexOf(item), count);
    }

    this.addClients = (item) => {
        this.clients.push(item);
    }

    this.deleteClient = (index, count = 1) => {
        this.clients.splice(index, count);
    }

    this.sell = (client, type, count, item) => {
        historyPurchase = {};
        historyPurchase.date = new Date();
        historyPurchase.name = client.name;
        historyPurchase.type = type;
        historyPurchase.count = count;
        historyPurchase.sum = count * item.value;
        this.goods.splice(this.goods.indexOf(item), count);
        this.clients[this.clients.indexOf(client)].purchase += count * item.value;
        this.History.push(historyPurchase);
    }

    this.countSell = () => {
        let count = 0;

        this.History.map((element) => {
            count += element.count;
        })

        return `Количество проданного товара: ${count}`;
    }

    this.sumSell = () => {
        let sum = 0;

        this.History.map((element) => {
            sum += element.sum;
        })

        return `Сумма заработанных денег: ${sum}`;
    }

    this.countGoods = () => {
        return `Количество товара на складе: ${this.goods.length}`;
    }

    this.countSellTypeGoods = (type) => {
        let count = 0;
        for (let key in this.History) {
            if (this.History[key].type == type) {
                count += this.History[key].count;
            }
        }
        return `Количество проданного товара типа ${type}: ${count}`;
    }

    this.countTypeGoods = (type) => {
        let count = 0;
        for (let key in this.goods) {
            if (this.goods[key].type == type) {
                count++;
            }
        }
        return `Количество товара на складе типа ${type}: ${count}`;
    }
}

const Goods = function (title, type, value) {
    this.title = title;
    this.type = type;
    this.value = value;
}

const Client = function (name, surName, purchase) {
    this.name = name;
    this.surName = surName;
    this.purchase = purchase;
}

let myFirstShop = new Shop(1);

let dress = new Goods('Dress', 'clothes', 100);
let coat = new Goods('Coat', 'clothes', 200);
let car = new Goods('Car', 'vehicle transport', 3100);

let ekonomik = new Client('Anastasiia', 'Andreeva', 3000);
let eleks = new Client('Irina', 'Popovich', 2000);
let employment = new Client('Victoriia', 'Kshenina', 1000);

myFirstShop.addGoods(dress, 20);
myFirstShop.addGoods(coat, 10);
myFirstShop.addGoods(car, 5);

myFirstShop.addClients(ekonomik);
myFirstShop.addClients(eleks);
myFirstShop.addClients(employment);

myFirstShop.deleteGoods(1, 1);

myFirstShop.sell(eleks, 'clothes', 2, dress);
myFirstShop.sell(ekonomik, 'vehicle transport', 1, car);
myFirstShop.sell(employment, 'clothes', 2, coat);

console.log(myFirstShop);

console.log(myFirstShop.sumSell());

console.log(myFirstShop.countSell());

console.log(myFirstShop.countGoods());

console.log(myFirstShop.countTypeGoods('clothes'));

console.log(myFirstShop.countTypeGoods('vehicle transport'));

console.log(myFirstShop.countSellTypeGoods('vehicle transport'));

console.log(myFirstShop.countSellTypeGoods('clothes'));

