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
    `, [id]
    )
    .then((result) => result.rows[0]);
}

module.exports = {
  selectTopics,
  selectArticles,
  selectArticleByID,
};
