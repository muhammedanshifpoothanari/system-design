const Coffee = require('./concreateBeverage');
const Milk = require('./decorator');


const coffee = new Coffee();
const milk = new Milk(coffee);

console.log(milk.cost(),' ', milk.getDescription());
