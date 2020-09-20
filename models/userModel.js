const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

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

exports.signup = async (person) => {
    const user = {
        email: person.email,
        password: bcrypt.hashSync(person.password, 10),
        name: person.name,
        role: person.role,
        adress: {
            street: person.adress.street,
            zip: person.adress.zip,
            city: person.adress.city
        }
    }

    const userToSave = new User(user);
    const response = await userToSave.save();
    //console.log('response', response)
    return response;
}

exports.getInfo = async () => {

}