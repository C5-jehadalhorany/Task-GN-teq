const connection = require("../../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const Register = async (req, res) => {
    const { Name, Mobile, Email, Country, City, Date_of_Birth, password } = req.body;
    const enPassword = await bcrypt.hash(password, saltRounds);
    const query = `INSERT INTO user (Name,Mobile,Email,Country,City,Date_of_Birth,password) value (?,?,?,?,?,?,?);`;
    const data = [Name, Mobile, Email, Country, City, Date_of_Birth, enPassword];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(409).json({
                success: false,
                massage: "The email already exists",
                err: err,
            })
        };
        res.status(201).json({
            success: true,
            massage: "Account Created Successfully",
            result: result
        });
    });
};


module.exports={
    Register
}