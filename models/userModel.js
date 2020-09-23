const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const orderModel = require("../models/orderModel");

const userSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	role: String,
	adress: {
		street: String,
		zip: String,
		city: String,
	},
	orderHistory: Array,
});

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

const User = mongoose.model('User', userSchema);

// Registrerar en ny användare
// Hashar password innan den sparas i DB
exports.signup = async (person) => {
	const user = {
		email: person.email,
		password: bcrypt.hashSync(person.password, 10),
		name: person.name,
		role: person.role ? person.role : 'customer',
		adress: {
			street: person.adress.street,
			zip: person.adress.zip,
			city: person.adress.city,
		},
		orderHistory: []
	};

	const userToSave = new User(user);
	const response = await userToSave.save();
	return response;
};

// Jämför om användaren finns
// Jämför lösenord
// Skickar tillbacka en JWT samt user info om allt stämmer
exports.login = async (email, password) => {
	const doc = await User.findOne({ email: email });
	if (!doc) return { message: 'Email not found' };

	const success = bcrypt.compareSync(password, doc.password);
	if (!success) return { message: 'Password not correct' };

	const token = jwt.sign(
		{ email: doc.email, name: doc.name, userId: doc._id, role: doc.role, adress: doc.adress },
		process.env.SECRET,
		{
			expiresIn: '1h',
		}
	);
	return { token: token, user: doc };
};

// Returnerar info som finns i token
exports.verifyToken = async (token, secret) => {
	const validToken = await jwt.verify(token, secret);
	return validToken;
};

// Rensar user collection.
// Used on tests
exports.clear = async () => {
	const doc = await User.deleteMany({}, { multi: true });
	return doc;
};

<<<<<<< HEAD
// Updaterar Order History om användare är 'Customer'
=======
//Hittar en användare som lagt en order. Lägger sedan till ordern i användarens orderhistorik
>>>>>>> 32f861668fd4eb47bd9e6c28f3255a56500e1e0c
exports.updateOrderHistory = async (id, order) => {
	const doc = await User.findOneAndUpdate({ _id: id }, {
		$push: {
			orderHistory: order
		},
	},
		{ new: true }
	);
	return doc;
};

// Returnerar order history
exports.getOrderHistory = async (id) => {
	console.log(id);
	const user = await User.findById(id);
	return user.orderHistory;
};