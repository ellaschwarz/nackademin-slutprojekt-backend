const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect, request } = require("chai");

const Database = require("../../database/database");
const userModel = require("../../models/userModel");
const app = require("../../app");
chai.use(chaiHttp);