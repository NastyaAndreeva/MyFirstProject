import {Goods} from './Goods.js'
import {Client} from './Client.js'
import {Shop} from './Shop.js'
import {Purchase} from './Purchase.js'


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
// myFirstShop.sell(ekonomik, 'vehicle transport', 1, car);
// myFirstShop.sell(employment, 'clothes', 2, coat);

console.log(myFirstShop);

// console.log(myFirstShop.sumSell());

// console.log(myFirstShop.countSell());

// console.log(myFirstShop.countGoods());

console.log(myFirstShop.countTypeGoods('clothes'));

console.log(myFirstShop.countTypeGoods('vehicle transport'));

// console.log(myFirstShop.countSellTypeGoods('vehicle transport'));

// console.log(myFirstShop.countSellTypeGoods('clothes'));

