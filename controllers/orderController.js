//import Model
const orderModel = require('../models/orderModel');
const auth = require('../middleware/auth')

exports.createOrder = async (req, res, next) => {
    console.log(req.user)

	//orderModel.createOrder()
    //Check if user is logged in or not 
    //if logged in --> Add order to user.orderHistory
    //Annars behöver man inte lägga till det 
    const { items, orderValue } = req.body;

    if(req.user) {
        try {
            const order = await orderModel.createOrder(items, orderValue);
            //Lägga till order i user 
            return res.status(200).json(order);
        } catch (error) {
            return res.status(404).send(error);
        }
    } else {
        try {
            const order = await orderModel.createOrder(items, orderValue);
            //Lägga till order i user 
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
