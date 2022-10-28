const express = require("express");

const RegisterRotuer = express.Router();

const { Register } = require("../Controllers/Register");

RegisterRotuer.post("/", Register);

module.exports = RegisterRotuer;
