const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect, request } = require('chai');

const Database = require('../../database/database');
const orderModel = require('../../models/orderModel');
const app = require('../../app');
chai.use(chaiHttp);

describe('Integration for Order', function () {
	before(async () => {
		try {
			await Database.connect();
		} catch (error) {
			console.log(error);
		}
	});

	beforeEach(async function () {
		//await orderModel.clear();
	});

	after(async () => {
		try {
			await Database.disconnect();
		} catch (error) {
			console.log(error);
		}
	});

	it('POST /api/orders should create a order', async function () {
		console.log('hehe');
	});
});
