const db = require("../db/connection.js");

module.exports.selectUsers = () => {
  return db.query(`SELECT * FROM users`).then((users) => users.rows);
}