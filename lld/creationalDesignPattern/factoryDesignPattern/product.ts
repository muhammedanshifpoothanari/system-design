interface Product{
    operation(): string;
}


class Product1 implements Product {
    operation(): string {
        return 'product1'
    }

    toString(): string {
        return this.operation();
    }
}

class  Product2 implements Product {
    operation(): string {
        return 'product2'
    }
}

module.exports = {
    Product1,
    Product2
}