const Animal = require('./interface');


class Dog extends Animal {
    makeSound () {
        return 'bowbowbow!!!!!'
    }
};


class Cat extends Animal {
    makeSound () {
        return 'meow meow meow meow meow meow meow meow'
    }
}


module.exports = {
    Dog,
    Cat
}