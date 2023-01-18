const db = require("../db/connection.js");

module.exports.deleteCommentByID = (id) => {
  if (isNaN(id)) {
    return Promise.reject({
      status: 400,
      msg: "Invalid argument. ID must be a number.",
    });
  }
  return db.query("DELETE FROM comments WHERE comment_id = $1;", [id]);
};
