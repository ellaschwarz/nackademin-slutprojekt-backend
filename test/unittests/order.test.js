const chai = require("chai");
const { expect, request } = require("chai");

const Database = require("../../database/database");
const orderModel = require("../../models/orderModel");

describe("Testing order models", () => {
    before(async () => {
        await Database.connect();
    });

    after(async () => {
        await Database.connect();
    });

    beforeEach('', async function () {
        await orderModel.clear();
    });

    it("should create a new order", async function () {
            let items = [4, 56, 77]
            let orderValue = 399
        

        const newOrder = await orderModel.createOrder(items, orderValue);
        newOrder.should.have.property('items');
        //expect(true).to.equal(true);

    });
})
