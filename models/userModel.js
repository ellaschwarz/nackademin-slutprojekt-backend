const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    role: String,
    adress: {
        street: String,
        zip: String,
        city: String
    },
    orderHistory: Array
})

/**
 {
    _id: '6b521d3f-3d15...' // add server side
    email: 'johan.kivi@zocom.se',
    password: '$$$hashed password$$$',
    name: 'Johan Kivi',
    role: 'admin', // or customer

    adress: {
        street: 'Tokitokvägen 3',
        zip: '123 45',
        city: 'Tokberga'
    },
    orderHistory: [ orderId1, orderId2, ... ]
} 
 */

const User = mongoose.model("User", userSchema);

exports.login = async () => {

}

exports.signup = async () => {

}

exports.getInfo = async () => {

}