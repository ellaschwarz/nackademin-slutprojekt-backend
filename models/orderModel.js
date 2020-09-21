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

exports.createOrder = async (order) => {
	const doc = await Order.create({
		timestamp: new Date(),
		status: 'inProcess',
		items: order.items,
		orderValue: order.orderValue
	});
	return doc;
};

exports.clear = async () => {
	const doc = await Order.deleteMany({});
	return doc;
}

exports.getOrders = async (orderIds) => {
	let orders = [];
	for await (id of orderIds) {
		console.log(id);
		let order = await Order.findById(id);
		orders.push(order);
	}
	return orders;
}

exports.getAllOrders = async () => {
	let orders = await Order.find({});
	return orders;
}
