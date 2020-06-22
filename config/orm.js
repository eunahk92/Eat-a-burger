const connection = require("./connection");
const util = require("util");

connection.query = util.promisify(connection.query);

/* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
*/

const orm = {
  selectAll(tableName) {
    return connection.query("SELECT * FROM ??", [tableName]);
  },
  insertOne(tableName, value) {
    return connection.query("INSERT INTO ?? VALUES (?, ?)", [tableName, value]);
  },
  UpdateOne(tableName, setCol, newValue, matchCol, matchValue) {
    let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    return connection.query(queryString, [tableName, setCol, newValue, matchCol, matchValue]);
  }
};

module.exports = orm;
