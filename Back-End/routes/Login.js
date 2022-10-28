const express = require("express");

const LoginRotuer = express.Router();

const { Login } = require("../Controllers/Login");

LoginRotuer.post("/", Login);

module.exports = LoginRotuer;