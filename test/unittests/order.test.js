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
        let order = {
            items: [4,56,77],
            orderValue: 399
        }

        const newOrder = await orderModel.createOrder(order);
        expect(newOrder).to.be.an('object')
        expect(newOrder).to.deep.include({'items': order.items, 'orderValue': order.orderValue});
        expect(newOrder.items).to.have.lengthOf(order.items.length);
        expect(newOrder.orderValue).to.be.equal(order.orderValue);
    });
})
