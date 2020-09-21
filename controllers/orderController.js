//import Model
const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel')
const auth = require('../middleware/auth')

exports.createOrder = async (req, res) => {

    if (req.user) {
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
    try {
        if (req.user.role === "admin") {
            const orders = await orderModel.getAllOrders();
            return res.status(200).json(orders);
        }
        else {
            const orderIds = await userModel.getOrderHistory(req.user.userId);
            const orders = await orderModel.getOrders(orderIds);
            return res.status(200).json(orders);
        }
        //Returnerar en lista på samtliga ordrar för admins, och ägda orders för inloggad användare.
    } catch (error) {
        return res.status(404).send(error);
    }

};
