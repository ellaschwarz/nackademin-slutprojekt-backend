//import Model
const productModel = require("../models/productModel");

exports.createProduct = async (req, res) => {
    try {
        const test = {
            title: req.body.title,
            price: req.body.price,
            shortDesc: req.body.shortDesc,
            longDesc: req.body.longDesc,
            imgFile: req.body.imgFile
        }
        const product = await productModel.createProduct(test);
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await productModel.updateProduct(productId, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }

}

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const deleted = await productModel.deleteProduct(productId);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }

}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.status(200).json(products)
    } catch (error) {
        res.status(404).send({ message: error.message });
    }

}

exports.getProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await productModel.getProduct(productId);
        res.status(200).json(product)
    } catch (error) {
        if (error.message === "not found") {
            res.status(404).send({ message: error.message });
        }
    }

}