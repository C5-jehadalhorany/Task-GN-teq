const connection = require("../../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const query = `SELECT * from user WHERE Email=? ;`;
    const data = [email];
    connection.query(query, data, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (err) {
                    res.status(403).json({
                        success: false,
                        message: `The password you’ve entered is incorrect`,
                    });
                }
                if (response) {
                    const query = `SELECT * from user WHERE Email=?;`;



                    const data = [email];
                    connection.query(query, data, (err, result) => {


                        if (err) {
                            console.log(err);
                        }
                    });
                    const payload = {
                        Name: result[0].Name,
                        userId: result[0].id,
                        Email: result[0].Email
                        
                    };
                    const secret = process.env.SECRET;
                    const token = jwt.sign(payload, secret);
                    res.status(200).json({
                        success: true,
                        token,
                        userId: result[0].id,
                        Name: result[0].Name,
                    });
                } else {
                    res.status(403).json({
                        success: false,
                        message: `The password you’ve entered is incorrect`,
                    });
                };
            });
        } else {
            res.status(404).json({
                success: false,
                message: "The email doesn't exist"
            });
        };
    });
};

module.exports = {
    Login
};
