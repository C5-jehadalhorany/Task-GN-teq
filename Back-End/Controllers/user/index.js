const connection = require("../../models/db");

const getAllUser = (req, res) => {
    const query = `select * from user where is_deleted=0 and status=1;`;
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server Error",
                err: err,
            });
        }
        res.status(200).josn({
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


module.exports = {
    getAllUser,
    getUserById
}


