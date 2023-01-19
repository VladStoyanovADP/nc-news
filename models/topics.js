const db = require("../db/connection.js");

module.exports.selectTopics = () => {
  return db.query(`SELECT * FROM topics`).then((result) => result.rows);
}

module.exports.postNewTopic = (body) => {
  if (body.slug && body.description) {
    return db
      .query(
        `
        INSERT INTO topics
        (slug, description)
        VALUES
        ($1, $2)
        RETURNING *;
        `,
        [
          body.slug,
          body.description,
        ]
      )
      .then((result) => {
        return result.rows[0];
      });
  } else {
    return Promise.reject({ status: 400, msg: "Bad Request" });
  }
};