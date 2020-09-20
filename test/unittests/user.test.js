const chai = require("chai");
const { expect } = require("chai");

const Database = require("../../database/database");
const userModel = require("../../models/userModel");

describe('User model', async function () {
    before(async () => {
        try {
            await Database.connect();
        } catch (error) {
            console.log(error);
        }
    })

    beforeEach(async () => {
        // Clear Database if other tests
    })

    after(async () => {
        try {
            await Database.disconnect();
        } catch (error) {
            console.log(error);
        }
    })

    it("Should create a user", async function () {
        const person = {
            email: "pepito@mail.com",
            password: "12345",
            name: "Pepito Perez",
            role: "customer",
            adress: {
                street: "Corazongatan 3",
                zip: "123 56",
                city: "SuperCity"
            }
        }

        const user = await userModel.signup(person);

        expect(user).to.be.a("object");
        expect(user._doc).to.include.all.keys(["_id", "email", "password", "name", "role", "adress", "orderHistory"]);
        expect(user.adress).to.have.all.keys(["street", "zip", "city"]);
        expect(user._doc).to.deep.include({ email: "pepito@mail.com", name: "Pepito Perez", role: "customer" })
        expect(user.password).to.not.equal("12345")

    })

})