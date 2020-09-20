const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect, request } = require('chai');

const Database = require('../../database/database');
const userModel = require('../../models/userModel');
const app = require('../../app');
chai.use(chaiHttp);

describe('Integration for User', function () {
	before(async () => {
		try {
			await Database.connect();
		} catch (error) {
			console.log(error);
		}
	});

	beforeEach(async () => {
		// Clear database
	});

	after(async () => {
		try {
			await Database.disconnect();
		} catch (error) {
			console.log(error);
		}
	});

	it('POST /api/register should create a user', async () => {
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
		const userToRegister = await userModel.signup(person);

		const resp = await request(app)
			.post('/api/register')
			.set('Content-Type', 'application/json')
			.send(userToRegister);
		expect(resp).to.be.json;
		expect(resp).to.have.status(201);
		expect(resp.body).to.include.keys([
			'_id',
			'email',
			'password',
			'name',
			'role',
			'adress',
			'orderHistory',
		]);
		expect(resp.body).to.deep.include({
			email: 'pepito@mail.com',
			name: 'Pepito Perez',
			role: 'customer',
		});
		expect(resp.body.adress).to.deep.include({
			street: 'Corazongatan 3',
			zip: '123 56',
			city: 'SuperCity',
		});
		expect(resp.password).to.not.equal('12345');
	});

	it('POST /api/auth should login a user', async () => {
		const body = {
			email: 'pepito@gmail.com',
			password: '12345',
		};

		await request(app)
			.post('/api/register')
			.set('Content-Type', 'application/json')
			.send(body)
			.then((res) => {
				expect(res).to.be.json;
				expect(res).to.have.status(201);
			});
	});
});
