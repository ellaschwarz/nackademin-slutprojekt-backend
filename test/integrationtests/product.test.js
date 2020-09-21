const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { expect, request } = require("chai");

const Database = require("../../database/database");
const productModel = require("../../models/productModel");
const app = require("../../app");

describe.only('Integration test for products', async function () {
    before(async function() {
        try {
            await Database.connect();
        } catch (error) {
            console.log(error);
        }

    })
    beforeEach( async function() {
        await productModel.clear()
        this.currentTest.prodObj = {
            title: 'Producto',
            price: 300,
            shortDesc: 'This is a new prod',
            longDesc: 'Long description!',
            imgFile: 'skateboard-greta.png'
        }
    })
    after(async () => {
        try {
            await Database.disconnect();
        } catch (error) {
            console.log(error);
        }

    })

    it('POST /api/products', async function() {
        const resp = await request(app)
            .post('/api/products')
            .set('Content-Type', 'application/json')
            .send(this.test.prodObj)
        expect(resp.body).to.be.a('object')
        expect(resp).to.have.status(201)
        expect(resp.body).to.include({
            title: 'Producto',
            price: 300,
            shortDesc: 'This is a new prod',
            longDesc: 'Long description!',
            imgFile: 'skateboard-greta.png'
        })


    })
})

