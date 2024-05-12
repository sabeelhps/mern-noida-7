const monkeyModule = require('./monkey');
const dogModule = require('./dog');
const catModule = require('./cat');

module.exports = {
        monkey: monkeyModule.monkey,
        dog: dogModule.dog,
        cat: catModule.cat
}