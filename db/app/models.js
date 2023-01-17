const db = require("../connection.js");

function selectTopics() {
  return db.query(`SELECT * FROM topics`).then((result) => result.rows);
}

function selectArticles() {
  return db
    .query(
      `
      SELECT articles.*, 
      COUNT(comments.article_id) as comment_count
      FROM articles
      LEFT JOIN comments 
      ON articles.article_id = comments.article_id
      GROUP BY articles.article_id 
      ORDER BY articles.created_at 
      DESC;
    `
    )
    .then((result) => result.rows);
}

function selectArticleByID(id) {
  return db
    .query(
      `
      SELECT * 
      FROM articles 
      WHERE article_id = $1;
    `,
      [id]
    )
    .then((result) => {
      return result.rows.length !== 0
        ? result.rows[0]
        : Promise.reject({ status: 404, msg: "Not Found" });
    });
}

function postCommentToArticle(id, body) {
  if (body.body && body.username)
  {
    return db
      .query(
        `
      INSERT INTO comments (author, body, article_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
        [body.username, body.body, id]
      )
      .then((result) =>
      {
        return result.rows[0]
      });
  } else {
    return Promise.reject({ status: 400, msg: "Bad Request" });
  }
}

module.exports = {
  selectTopics,
  selectArticles,
  selectArticleByID,
  postCommentToArticle,
};
