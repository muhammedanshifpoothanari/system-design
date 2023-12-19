const Bevarage = require('./bevarage');


class MilkDecorator  extends  Bevarage {
    constructor(bevarage) {
        super();
        this.bevarage = bevarage;
    }

    cost() {
      return  this.bevarage.cost() + 5;
    }


    getDescription() {
        return this.bevarage.getDescription() +' '+ 'Milk'
    }
}

module.exports = MilkDecorator;