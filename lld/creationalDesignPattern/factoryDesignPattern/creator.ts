const {
     Product1:Product1s,
     Product2:Product2s
}  =  require('./product');

abstract class Creator {
    public abstract factoryMethode(): Product;
    public someOperation(): string {
    const product = this.factoryMethode();
    return `someOperation${product}`;
    }
}

class Creator1 extends Creator {
    public factoryMethode() {
        return new Product1s
    }
}


class Creator2 extends Creator {
    public factoryMethode() {
        return new Product2s
    }
}

module.exports = {
    Creator1,
    Creator2
}