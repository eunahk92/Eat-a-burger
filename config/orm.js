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

const orm = {
  all(table) {
    let queryString = `SELECT * FROM ${table}`;
    return connection.query(queryString);
  },
  insert(table, cols, vals) {
    let queryString = `INSERT INTO ${table} (${cols.join(", ")}) VALUES (${printQuMarks(cols.length)})`;
    return connection.query(queryString, vals);
  },
  update(table, newDataObj, condition) {
    let queryString = `UPDATE ${table} SET ? WHERE ?`;
    return connection.query(queryString, [newDataObj, condition]);
  },
  delete(table, condition) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    return connection.query(queryString);
  }
};

module.exports = orm;
