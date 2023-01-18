const db = require("../db/connection.js");

module.exports.selectUsers = () => {
  return db.query(`SELECT * FROM users`).then((users) => users.rows);
}

module.exports.selectUser = (username) => {
  return db
    .query("SELECT * FROM users WHERE username LIKE $1;", [username])
    .then((user) => 
    {
      if (user.rowCount === 0) {
        return Promise.reject({
          status: 404,
          msg: "Username not found in database.",
        });
      } else return user.rows[0];
    })
};