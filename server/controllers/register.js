import dbConnection from '../config/database.js';
import bcrypt from 'bcryptjs';
const saltRounds = 10;

// User registration
const register = async (req, res, next) => {
    await dbConnection.query(
      `SELECT * FROM users WHERE LOWER(email) = LOWER(${dbConnection.escape(
        req.body.email
      )});`,
      (err, result) => {
        if (result.length) {
          return res.status(409).send({
            msg: 'User is already registered'
          });
        } else {
          // Username is available
          bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) {
              return res.status(500).send({
                msg: err
              });
            } else {
              // has hashed pw => add to dbConnection
              dbConnection.query(
                `INSERT INTO users (email, password, registered) VALUES (${dbConnection.escape(
                  req.body.email)}, ${dbConnection.escape(hash)}, now())`,
                (err, result) => {
                  if (err) {
                    throw err;
                    return res.status(400).send({
                      msg: err
                    });
                  }
                  return res.status(201).send({
                    msg: 'Registered!'
                  });
                }
              );
            }
          });
        }
      }
    );
};

export default register;