const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String}
});

const registerModel=mongoose.model('register',registerSchema);
module.exports = registerModel;