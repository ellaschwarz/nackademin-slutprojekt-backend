//import Model
const orderModel = require('../models/orderModel');

exports.createOrder = async (req, res) => {
	//orderModel.createOrder()

	const { items, orderValue } = req.body;
	try {
		const order = await orderModel.createOrder(items, orderValue);
		return res.status(200).json(order);
	} catch (error) {
		return res.status(404).json(err);
	}
};

exports.getOrders = async (req, res) => {
	//orderModel.getOrders()
	//Returnerar en lista på samtliga ordrar för admins, och ägda orders för inloggad användare.
};
