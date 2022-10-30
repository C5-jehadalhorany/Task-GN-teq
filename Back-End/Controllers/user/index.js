const connection = require("../../models/db");

const getAllUser = (req, res) => {
    const query = `select * from user where is_deleted=0 and is_Status='active';`;


    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server Error",
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            massage: "ALL Users",
            result: result
        });
    });
};

const getUserById = (req, res) => {
    const userId = req.params.id;
    const query = `select * from user where id=? and is_deleted=0;`;
    const data = [userId];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server Error",
                err: err,
            });
        };
        res.status(200).json({
            success: true,
            massage: `User By ${userId}`,
            result: result,
        });
    });
};

const deleteUserById = (req, res) => {
    const userId = req.params.id;
    const query = `UPDATE user SET is_deleted=1 WHERE id=?;`;
    const data = [userId];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server Error",
                err: err,
            });
        }
        if (!result.changedRows) {
            return res.status(404).json({
                success: false,
                massage: `The user: ${userId} is not found`,
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            massage: `Succeeded to delete user with id: ${userId}`,
            result: result,
        });
    });
};

const createUser = (req, res) => {
    const current = new Date().toLocaleDateString('en-CA')
    let is_Status = ""
    const { Name, Mobile, Email, Country, City, Date_of_Birth, Contract_Start_Date, Contract_End_Date } = req.body
    
    if (Contract_End_Date > Contract_Start_Date) {
        if (current >= Contract_Start_Date && current < Contract_End_Date) {
            is_Status = "active"
        } else {
            is_Status = "not_active"
        }
    }

console.log(req.body, ",123456789");
const query = `INSERT INTO user (Name, Mobile, Email, Country, City, Date_of_Birth, Contract_Start_Date, Contract_End_Date,is_Status) value (?,?,?,?,?,?,?,?,?);`;
const data = [Name, Mobile, Email, Country, City, Date_of_Birth, Contract_Start_Date, Contract_End_Date, is_Status]
connection.query(query, data, (err, result) => {
    if (err) {
        return res.status(500).json({
            success: false,
            massage: "Server Error",
            err: err,
        });
    };
    res.status(201).json({
        success: true,
        massage: `User created`,
        result: result,
    });
});
};


const updateuserById = (req, res) => {
    const { Name, Mobile, Email, Country, City, Date_of_Birth, Contract_Start_Date, Contract_End_Date, Status } = req.body
    console.log(req.body);
    const id = req.params.id;
    const query = `SELECT * FROM user WHERE id=?;`;
    const data = [id];

    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(404).json({
                success: false,
                massage: `Server error`,
                err: err,
            });
        }
        if (!result.length) {
            return res.status(404).json({
                success: false,
                massage: `The user: ${id} is not found`,
                err: err,
            });
        } // result are the data returned by mysql server
        else {
            const query = `UPDATE user SET Name=? ,Mobile=? ,Email=? ,Country=? ,City=? ,Date_of_Birth=? ,Contract_Start_Date=? ,Contract_End_Date=? ,is_Status=? WHERE id=?;`;

            const data = [
                Name || result[0].Name,
                Mobile || result[0].Mobile,
                Email || result[0].Email,
                Country || result[0].Country,
                City || result[0].City,
                Date_of_Birth?.slice(0, 10) || result[0].Date_of_Birth,
                Contract_Start_Date?.slice(0, 10) || result[0].Contract_Start_Date,
                Contract_End_Date?.slice(0, 10) || result[0].Contract_End_Date,
                Status || result[0].is_Status,
                id,
            ];
            connection.query(query, data, (err, result) => {
                console.log(err);
                if (result.affectedRows != 0) {
                    res.status(201).json({
                        success: true,
                        massage: `user updated`,
                        result: result,
                    });
                };
            });
        };
    });
};


module.exports = {
    getAllUser,
    getUserById,
    deleteUserById,
    createUser,
    updateuserById
}


