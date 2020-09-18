const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

//get all orders (admin/customer)
router.get("/", orderController.getOrders);

//Post new order
router.post("/", orderController.createOrder);

module.exports = router;