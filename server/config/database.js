import mysql from 'mysql';

// Create one MySQL connection

const credentials = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nsn_messenger'
};

const dbConnection = mysql.createConnection(credentials);
dbConnection.connect();

export default dbConnection;