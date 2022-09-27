import mysql from 'mysql';

// Create one MySQL connection

const credentials = {
    host: 'localhost',
    user: 'root',
    database: 'nsn_messenger'
};

const dbConnection = mysql.createConnection(credentials);
dbConnection.connect();

export default dbConnection;

// Create pool to allow for multiple MySQL connections

// const credentials = {
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejs-jwt'
// };

// const pool = mysql.createPool({credentials});

// export default pool;