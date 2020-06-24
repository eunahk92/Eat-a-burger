const connection = require("./connection");
const util = require("util");

connection.query = util.promisify(connection.query);

printQuMarks = num => {
  let arr = [];
  for (let i = 0; i < num; i ++) {
      arr.push("?")
  }
  return arr.toString();
}

/* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
*/

const orm = {
  all(table) {
    let queryString = "SELECT * FROM ??";
    return connection.query(queryString, [table]);
  },
  insert(table, cols, vals) {
    let queryString = `INSERT INTO ${table} (${cols.join(", ")}) VALUES (${printQuMarks(vals.length)})`;
    return connection.query(queryString, vals);
  },
  update(table, setCol, newVal, condition) {
    let queryString = `UPDATE ${table} SET ${setCol} = ${newVal} WHERE ${condition}`;
    return connection.query(queryString);
  },
  delete(table, condition) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    return connection.query(queryString);
  }
};

module.exports = orm;
