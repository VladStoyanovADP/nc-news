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

module.exports.patchCommentByID = (id, body) => {
  if (body.inc_votes) {
    return db
      .query(
        `
        UPDATE comments
        SET votes = votes + $1
        WHERE comment_id = $2
        RETURNING *;
    `,
        [body.inc_votes, id]
      )
      .then((result) => {
        if (result.rowCount === 0)
        {
          return Promise.reject({ status: 404, msg: "Not Found" });
        } else
        {
          return result.rows[0];
        }
      });
  } else return Promise.reject({ status: 400, msg: "Bad Request" });
};
