class Observer {
    display;
    update(data) {
        this.display = data;
        this.logger(this.display )
    }
    logger(message) {
        console.log(message,"has been updated");
    }
}

module.exports = {Observer};
