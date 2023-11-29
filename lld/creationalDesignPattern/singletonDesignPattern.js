class Counter {
    static value = 0;
}

class CountingProcess extends Counter {
    setValue() {
        Counter.value++;
    }
}

class ShowCounter extends Counter {
    static getValue() {
        return Counter.value;
    }
}

class compose {
    #processManager;

    constructor() {
        this.init();
    }

    init() {
        if (!this.#processManager) {
            this.#processManager = new CountingProcess();
        }
    }

    getInstance() {
        this.init();
        return this.#processManager;
    }
}

const compose1 = new compose();
const compose2 = new compose();
const compose3 = new compose();

compose1.getInstance().setValue();
compose1.getInstance().setValue();
compose1.getInstance().setValue();
compose2.getInstance().setValue();
compose3.getInstance().setValue();
console.log(ShowCounter.getValue());






