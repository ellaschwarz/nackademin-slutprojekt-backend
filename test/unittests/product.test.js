const chai = require("chai");
const { expect, request } = require("chai");

const Database = require("../../database/database");
const productModel = require("../../models/productModel");

describe.only("Product Unit tests", () => {
    before(async function() {
        try {
            await Database.connect();
        } catch (error) {
            console.log(error);
        }

    })
    beforeEach( async function() {
        await productModel.clear()
        const prodObj = {
            title: 'Producto',
            price: 300,
            shortDesc: 'This is a new prod',
            longDesc: 'Long description!',
            imgFile: 'skateboard-greta.png'
        }
        this.currentTest.product = await productModel.createProduct(prodObj);
    })
    after(async () => {
        try {
            await Database.disconnect();
        } catch (error) {
            console.log(error);
        }

    })
    it("should create a product", async function () {
        try {
            expect(this.test.product).to.be.a("object");
            expect(this.test.product._doc).to.include.all.keys('title', 'price', 'shortDesc', 'longDesc', 'imgFile');
            expect(this.test.product).to.include({
                title: 'Producto',
                price: 300,
                shortDesc: 'This is a new prod',
                longDesc: 'Long description!',
                imgFile: 'skateboard-greta.png'
            })
        } catch (error) {
            console.log(error);
        }
    })
    it('Should update a product', async function() {
        try {
            const newProduct = { title: 'Product updated!' }
            const productUpdated = await productModel.updateProduct(this.test.product._id, newProduct)

            expect(productUpdated).to.be.a('object')
            expect(productUpdated._doc).to.include.all.keys('title', 'price', 'shortDesc', 'longDesc', 'imgFile');
            expect(productUpdated).to.include({
                title: 'Product updated!',
                price: 300,
                shortDesc: 'This is a new prod',
                longDesc: 'Long description!',
                imgFile: 'skateboard-greta.png'
            })
        } catch (error) {
            console.log(error);
        }
    })

})