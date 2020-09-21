//import Model
const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel')
const auth = require('../middleware/auth')

exports.createOrder = async (req, res) => {

    if(req.user) {
        try {
            console.log('entering in auth')
            const order = await orderModel.createOrder(req.body);
            await userModel.updateOrderHistory(req.user.userId, order);
            return res.status(200).json(order);
        } catch (error) {
            return res.status(404).send(error);
        }
    } else {
        try {
            const order = await orderModel.createOrder(req.body);
            console.log('entering in anon')
            return res.status(200).json(order);
        } catch (error) {
            return res.status(404).send(error);
        }
    }

};

exports.getOrders = async (req, res) => {
	//orderModel.getOrders()
	//Returnerar en lista på samtliga ordrar för admins, och ägda orders för inloggad användare.
};
