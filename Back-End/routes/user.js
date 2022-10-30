const express = require("express");

const UserRotuer = express.Router();

const { getAllUser,
    getUserById,
    deleteUserById,
    createUser,
    updateuserById } = require("../Controllers/user");

UserRotuer.get("/", getAllUser);
UserRotuer.get("/get/:id", getUserById);
UserRotuer.put("/delete/:id", deleteUserById);
UserRotuer.put("/update/:id", updateuserById);
UserRotuer.post("/", createUser);


module.exports = UserRotuer;