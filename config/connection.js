const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: "burgers_db"
    });
}

  
connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
});

module.exports = connection;