const {
    Creator1: Creator1s,
    Creator2: Creator2s,
} = require('./creator')

function build(creator: Creator) {
    return creator.someOperation()
}



const builder = build(new Creator1s())

console.log(builder);
