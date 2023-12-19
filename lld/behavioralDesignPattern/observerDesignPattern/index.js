const {Observable} = require('./obervable.js');
const {Observer} = require('./observer');



const observer1 = new Observer()
const observer2 = new Observer()
const observer3 = new Observer()
const observable = new Observable()

observable.add(observer1)
observable.add(observer2)
observable.add(observer3)

observable.setData(1);
observable.setData(2);



