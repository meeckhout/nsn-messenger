import dbConnection from '../config/database.js';
import bcrypt from 'bcryptjs';
const saltRounds = 10;

// User login
const login = async (req, res, next) => {
    console.log("test");
    console.log(req.body);
    await dbConnection.query(
        `SELECT * FROM users WHERE email = ${dbConnection.escape(req.body.email)};`,
        (err, result) => {
            // console.log(result);
            if (!result.length) {
                return res.status(409).send({msg: 'User is not registered'});
            } else {
                // User is registered - Check password
                bcrypt.compare(req.body.password, result[0]['password'],
                    (bErr, bResult) => {
                        // console.log(bErr, bResult);
                        // Wrong password
                        if (bErr) {
                            throw bErr;
                            return res.status(401).send({msg: 'Password is incorrect'});
                        }
                        // Correct password
                        if (bResult) {
                            dbConnection.query(
                                'UPDATE users SET last_login = now(), status = ? WHERE id = ?', [true, `${result[0].id}`]
                            );
                            return res.status(200).send({ msg: "Logged in successfully" });
                        }
                    }
                )
            }
        });
};

export default login;