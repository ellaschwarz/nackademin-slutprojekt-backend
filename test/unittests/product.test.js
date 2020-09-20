const chai = require("chai");
const { expect, request } = require("chai");

const Database = require("../../database/database");
const productModel = require("../../models/productModel");

describe("test", () => {
    before(async () => {
        try {
            await Database.connect();
        } catch (error) {
            console.log(error);
        }

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
            const product = await productModel.createProduct();
            //console.log(product);
            //expect(product).to.be.a("Object");
            expect(product).to.include({ title: "test", price: 1, shortDesc: "lorem", longDesc: "lorem Ipsum", imgFile: "blabla " });
        } catch (error) {
            console.log(error);
        }
    })
})