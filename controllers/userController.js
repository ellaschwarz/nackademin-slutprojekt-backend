//import Model
const userModel = require('../models/userModel');

exports.signup = async (req, res) => {
	const userToCreate = {
		email: req.body.email,
		password: req.body.password,
		name: req.body.name,
		role: req.body.role,
		adress: {
			street: req.body.adress.street,
			zip: req.body.adress.zip,
			city: req.body.adress.city,
		},
	};

	try {
		const response = await userModel.signup(userToCreate);
		res.status(201).send(response);
	} catch (error) {
		console.error(error);
		res.status(400).send({ message: error.toString() });
	}
};

exports.login = async (req, res) => {
	//userModel.login()
};

exports.getInfo = async (req, res) => {
	//userModel.getInfo()
};
