const Cart = function(id) {
    this.id = id;
    this.items = [];

    this.addItem = (item) => {
        this.items.push(item);
    }
    this.removeItemByIndex = (index) => {
        // To do
    }
    this.checkout = () => {
        let sum = 0;
        
        this.items.map((element) => {
            sum += element.value;
        })

        return sum;
    }
}

const Item = function(title, value) {
    this.title = title;
    this.value = value;
}

let myFirstCart = new Cart(1);

let shoes = new Item('Shoes', 100);
let coat = new Item('Coat', 200);
let car = new Item('Car', 2000);


myFirstCart.addItem(shoes);
myFirstCart.addItem(coat);
myFirstCart.addItem(car);

console.log(myFirstCart.items[0].title);

console.log(myFirstCart.checkout());