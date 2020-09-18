const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//Login a user
router.post("/auth", userController.login);

//register a user
router.post("/register", userController.signup);

//get user information
router.get("/me", userController.getInfo);

module.exports = router