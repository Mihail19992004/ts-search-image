
const {Schema, model} = require('mongoose');

const User = new Schema({
    name: {type: String},
    pass: {type: String}
});


module.exports = model('User', User );