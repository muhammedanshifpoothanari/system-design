const { Dog, Cat}  = require('./concreteClass')



class  Factory {
   animal;
    makeSound (key) {
        switch (key) {
            case 'Dog':
                this.animal = new Dog();
                this.logger(this.animal.makeSound());
                break;
            case 'Cat':
                this.animal = new Cat();
                this.logger(this.animal.makeSound());
                break;
        
            default:
                this.logger('no animal FOund By this name');
                break;
        }
    }

    logger (message) {
        console.log(message);
    }
   
}


module.exports = Factory