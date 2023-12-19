class Observable {
    list =  [];
    data;

    add(observer) {
        this.list.push(observer);
    }

    remove(observer) {
        this.list.splice(this.list.indexOf(observer), 1);
    }

    notify() {
        this.list.map(obj => obj.update(this.data));
    }
    setData(data) {
        this.data = data;
        this.notify()
    }
}


module.exports = {Observable};