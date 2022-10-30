const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");
const LoginRotuer = require("./routes/Login");
const RegisterRotuer = require("./routes/Register");
const UserRotuer = require("./routes/user")



const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", LoginRotuer);
app.use("/register", RegisterRotuer);
app.use("/user", UserRotuer);





app.get("/", function (req, res) {
    res.send('Hello World');
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, (() => {
    console.log(`server is working${PORT}`);
}));


