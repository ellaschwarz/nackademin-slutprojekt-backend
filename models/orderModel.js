const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	timestamp: Date,
	status: String,
	items: Array,
	orderValue: Number
});

const Order = mongoose.model('Order', orderSchema);
/* {
    _id: 123,
    timeStamp: Date.now(),
    status: 'inProcess',
    items: [ <productId1>, <productId2>, ... ],
    orderValue: 999
}  */

exports.createOrder = async (items, orderValue) => {
	const doc = await Order.create({
		timestamp: new Date(),
		status: 'inProcess',
		items,
		orderValue
	});
	return doc;
};

exports.getOrders = async () => {};
