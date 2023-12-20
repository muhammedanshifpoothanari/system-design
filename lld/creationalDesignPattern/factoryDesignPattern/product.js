"use strict";
class Product1 {
    operation() {
        return 'product1';
    }
    toString() {
        return this.operation();
    }
}
class Product2 {
    operation() {
        return 'product2';
    }
}
module.exports = {
    Product1,
    Product2
};
