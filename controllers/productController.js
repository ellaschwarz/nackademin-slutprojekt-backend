//import Model
const productModel = require("../models/productModel");

exports.createProduct = async (req, res) => {
    console.log("in controller");
    const product = await productModel.createProduct();
    res.send(product);

}

exports.updateProduct = async (req, res) => {
    const productId = req.params.productId;
    //productModel.updateProduct();
}

exports.deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    //productModel.deleteProduct();
}

exports.getAllProducts = async (req, res) => {
    //productModel.getAllProducts();
}

exports.getProduct = async (req, res) => {
    const productId = req.params.productId;
    //productModel.getProduct()
}