const mongoose = require("mongoose");
const products = require("../database/products.json");

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    shortDesc: String,
    longDesc: String,
    imgFile: String
})

const Product = mongoose.model("Product", productSchema);

/*{
    _id: '39y7gbbZk1u4ABnv',
    title: 'Gretas Fury',
    price: 999,
    shortDesc: 'Unisex',
    longDesc: 'Skate ipsum dolor sit amet...',
    imgFile: 'skateboard-greta.png'
} */

exports.init = async () => {
    products.forEach(async product => {
        await Product.create(product);
    })
}

exports.createProduct = async (prod) => {
    const product = await Product.create(prod)
    if (!product) {
        throw new Error("could not create product");
    }
    return product._doc
}

exports.updateProduct = async (id, prod) => {
    const updated = await Product.findByIdAndUpdate(id, prod, { new: true })
    if (!updated) {
        throw new Error("something went wrong");
    }
    return updated._doc
}

exports.deleteProduct = async (id) => {
    const deleted = await Product.deleteOne({ _id: id })
    if (!deleted) {
        throw new Error("something went wrong");
    }
    return deleted
}


exports.getAllProducts = async () => {
    const products = await Product.find({})
    if (!products) {
        throw new Error("no products found");
    }
    return products
}

exports.getProduct = async (id) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error("not found");
    }
    return product._doc
}

exports.clear = async () => {
    await Product.deleteMany({})
}
