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

exports.createProduct = async (prod) => {
    try {
        const product = await Product.create(prod)
        return product
    } catch (error) {
        console.log(error)
    }
}

exports.updateProduct = async (id, prod) => {
    try {
        const updated = await Product.findByIdAndUpdate(id, prod, { new: true })
        return updated
    } catch (error) {
        console.log(error)
    }
}

exports.deleteProduct = async (id) => {
    try {
        const deleted = await Product.deleteOne({ _id: id })
        return deleted
    } catch (error) {
        console.log(error)
    }
}


exports.getAllProducts = async () => {
    try {
        const products = await Product.find({})
        return products
    } catch (error) {
        console.log(error)
    }
}

exports.getProduct = async (id) => {
    try {
        const product = await Product.findById(id)
        return product
    } catch (error) {
        console.log(error)
    }

}

exports.clear = async () => {
    await Product.deleteMany({})
}
