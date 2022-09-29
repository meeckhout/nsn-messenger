import dbConnection from '../config/database.js';

const logout = (req, res) => {
    console.log(req.body);
    dbConnection.query(
        'UPDATE users SET status = ? WHERE email = ?', [false, req.body.email]
    );
    return res.status(200).send({ msg: "Logged out successfully" });
};

export default logout;