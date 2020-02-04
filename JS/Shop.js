const Shop = function(id) {
    this.id = id;
    this.goods = [];
    this.clients = [];
    this.historyPurchase = [];

    this.addGoods = (item, count = 1) => {
        for (let i = 1; i<= count; i++){
            this.goods.push(item);
            console.log(this.goods);
        }
    }

    this.deleteGoods = (index, count) => {
        this.goods.splice(index, count);
    }

    this.addClients = (item) => {
        this.clients.push(item);
    }

    this.deleteClient = (index, count = 1) => {
        this.clients.splice(index, count);
    }

    this.sell = (item) => {
        this.historyPurchase.push(item);
    }

    this.countSell = (item) => {

    }

    this.sumSell = (item) => {

    }

    this.countGoods = (item) => {

    }

    this.sumTypeGoogs = (item) => {

    }

    this.countTypeGoods = (item) => {
        // ассоциативный массив
    }
     // this.checkout = () => {
    //     let sum = 0;
    //     this.items.map((element) => {
    //         sum += element.value;
    //     })
    //     return sum;
    // }
    
}

const Goods = function(title, type, value) {
    this.title = title;
    this.type = type;
    this.value = value;
}

const Client = function(name, surName, purchase) {
    this.name = name;
    this.surName = surName;
    this.purchase = purchase;
}

const History = function(date, name, type, count, sum) {
    this.date = date;
    this.name = name;
    this.type = type;
    this.count = count;
    this.sum = sum;
}

let myFirstShop = new Shop(1);

let dress = new Goods('Dress', 'clothes', 100);
let coat = new Goods('Coat', 'clothes', 200);
let car = new Goods('Car', 'vehicle transport', 2000);

let ekonomik = new Client('Anastasiia', 'Andreeva', 3000);
let eleks = new Client('Irina0', 'Popovich', 2000);
let eleks1 = new Client('Irina1', 'Popovich', 2000);
let eleks2 = new Client('Irina2', 'Popovich', 2000);
let eleks3 = new Client('Irina3', 'Popovich', 2000);

myFirstShop.addGoods(dress, 3);
myFirstShop.addGoods(coat);
myFirstShop.addGoods(car);

myFirstShop.addClients(ekonomik);
myFirstShop.addClients(eleks);
myFirstShop.addClients(eleks1);
myFirstShop.addClients(eleks2);
myFirstShop.addClients(eleks3);
myFirstShop.deleteGoods(1,1);
myFirstShop.deleteClient(1);

console.log(myFirstShop);
