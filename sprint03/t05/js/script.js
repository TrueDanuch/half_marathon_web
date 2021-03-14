var guestList = new WeakMap();

var guest1 = new String("Greg");
var guest2 = new String("John");
var guest3 = new String("Ethan");
var guest4 = new String("Andrew");
var guest5 = new String("dimka");

guestList.set(guest1, "Dorbell");
guestList.set(guest2, "Weak");
guestList.set(guest3, "Drake");
guestList.set(guest4, "Creator");
guestList.set(guest5, "Wo");

guestList.delete(guest3);

console.log(guestList.get(guest2) + " and " + guestList.get(guest4));


var menu = new Set();

var dish1 = {
    name: "Soup",
    price: 80
};
var dish2 = {
    name: "Salad",
    price: 40
};
var dish3 = {
    name: "Steak",
    price: 110
};
var dish4 = {
    name: "Julienne",
    price: 130
};
var dish5 = {
    name: "Fruit salad",
    price: 90
};


menu.add(dish1);
menu.add(dish2);
menu.add(dish3);
menu.add(dish4);
menu.add(dish5);

menu.delete(dish4);

console.log(menu.size);
menu.forEach((dish) => {
  console.log(dish.name + " - " + dish.price + " UAH");
});


var bankVault = new Map();

bankVault.set("Greg", 1200);
bankVault.set("John", 23000);
bankVault.set("Andrew", 1488);
bankVault.set("dimka", 228);

bankVault.forEach(console.log);


let coin1 = { value: "UAH" };
let coin2 = { value: 2 };
let coin3 = { value: 3 };
let coin4 = { value: "Dollar" };
let coin5 = { value: "Yuan" };

let coinCollection = new WeakSet();

coinCollection.add(coin1);
coinCollection.add(coin2);
coinCollection.add(coin3);
coinCollection.add(coin4);
coinCollection.add(coin5);
console.log(coinCollection);