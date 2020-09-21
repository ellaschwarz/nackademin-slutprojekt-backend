const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect, request } = require("chai");

const Database = require("../../database/database");
const orderModel = require("../../models/orderModel");
const app = require("../../app");
chai.use(chaiHttp);

