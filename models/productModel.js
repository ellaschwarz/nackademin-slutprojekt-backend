const mongoose = require("mongoose");

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

exports.createProduct = async () => {
    const product = await Product.create({ title: "test", price: 1, shortDesc: "lorem", longDesc: "lorem Ipsum", imgFile: "blabla " });
    return product;
}

exports.updateProduct = async () => {

}

exports.deleteProduct = async () => {

}

exports.getAllProducts = async () => {

}

exports.getProduct = async () => {

}

