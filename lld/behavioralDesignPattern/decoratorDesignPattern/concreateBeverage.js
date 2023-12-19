const Bevarage = require('./bevarage');

class Coffee extends  Bevarage {
    cost () {
        return 10
    }

    getDescription () {
        return 'Coffee'
    }
}


module.exports = Coffee;