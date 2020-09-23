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
		await userModel.signup(userToCreate);
		const doc = await userModel.login(req.body.email, req.body.password);
		res.status(201).json(doc);
	} catch (error) {
		console.error(error);
		res.status(400).send({ message: error.toString() });
	}
};

exports.login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const doc = await userModel.login(email, password);
		res.status(200).json(doc);
	} catch (error) {
		console.log(error);
		res.status(401).send({ message: error.toString() });
	}
};


exports.getInfo = async (req, res) => {
	//userModel.getInfo()
};
