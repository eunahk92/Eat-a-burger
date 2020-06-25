const connection = require("./connection");
const util = require("util");

connection.query = util.promisify(connection.query);

const orm = {
  all: table => connection.query(`SELECT * FROM ${table}`),
  insert: (table, newData) => connection.query(`INSERT INTO ${table} SET ?`, newData),
  update: (table, newDataObj, condition) => connection.query(`UPDATE ${table} SET ? WHERE ?`, [newDataObj, condition]),
  delete: (table, condition) => connection.query(`DELETE FROM ${table} WHERE ${condition}`)
};

module.exports = orm;
