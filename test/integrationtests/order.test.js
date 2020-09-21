const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const Database = require('../../database/database');
const userModel = require('../../models/userModel');
const app = require('../../app');

const { expect, request } = require('chai');

describe('Integration for Order', function () {
	before(async () => {
		try {
			await Database.connect();
		} catch (error) {
			console.log(error);
		}
	});

	beforeEach(async function () {
		await userModel.clear();
		//await orderModel.clear();
		const person = {
			email: 'pepito@mail.com',
			password: '12345',
			name: 'Pepito Perez',
			role: 'customer',
			adress: {
				street: 'Corazongatan 3',
				zip: '123 56',
				city: 'SuperCity',
			},
		};

		await userModel.signup(person);

		const login = await userModel.login('pepito@mail.com', '12345');
		this.currentTest.token = login.token;
		this.currentTest.user = login.user;
		console.log(this.currentTest.user);
		console.log(this.currentTest.token);
	});

	after(async () => {
		try {
			await Database.disconnect();
		} catch (error) {
			console.log(error);
		}
	});

	it('POST /api/orders should create a order', async function () {
		const body = {
			items: [3, 5, 1],
			orderValue: 399,
		};

		await request(app)
			.post('/api/orders')
			.set('Authorization', `Bearer ${this.test.token}`)
			.send(body)
			.then((res) => {
				//console.log(res.body);
			});
	});
});
