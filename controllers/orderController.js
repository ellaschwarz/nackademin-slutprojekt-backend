//import MOdel
const orderModel = require('../models/orderModel');

exports.createOrder = async (req, res) => {
	try {
		console.log(req.body);
		return res.status(200).json(req.body);
	} catch (err) {
		console.log(err);
		return res.status(200).send(err);
	}

	//orderModel.createOrder()
};

exports.getOrders = async (req, res) => {
	//orderModel.getOrders()
	//Returnerar en lista på samtliga ordrar för admins, och ägda orders för inloggad användare.
};
