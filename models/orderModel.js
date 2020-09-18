const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    timestamp: Date,
    status: String,
    items: Array,
    orderValue: Number
})



const Order = mongoose.model("Order", orderSchema);
/* {
    _id: 123,
    timeStamp: Date.now(),
    status: 'inProcess',
    items: [ <productId1>, <productId2>, ... ],
    orderValue: 999
}  */

exports.createOrder = async () => {

}

exports.getOrders = async () => {

}