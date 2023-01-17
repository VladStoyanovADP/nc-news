const db = require("../connection.js");

function selectTopics() {
  return db.query(`SELECT * FROM topics`).then((result) => result.rows);
}

function selectArticles(sort_by = "created_at", order = "desc", topic) {
  const validSortingQueries = [
    "title",
    "topic",
    "author",
    "body",
    "votes",
    "created_at",
    "comment_count",
  ];
  const validOrderQueries = ["asc", "desc"];
  const queryParams = [];
  if (
    !validSortingQueries.includes(sort_by) ||
    !validOrderQueries.includes(order)
  ) {
    return Promise.reject({
      status: 400,
      message: "Invalid query.",
    });
  }
  let selectQuery = `
      SELECT articles.*, 
      COUNT(comments.article_id) as comment_count
      FROM articles
      LEFT JOIN comments 
      ON articles.article_id = comments.article_id
      `;

  if (topic) {
    queryParams.push(topic);
    selectQuery += `
		WHERE topic LIKE $1
		GROUP BY (articles.article_id)
		ORDER BY ${sort_by} ${order};
		`;
  } else {
    selectQuery += `
		GROUP BY (articles.article_id)
		ORDER BY ${sort_by} ${order};
		`;
  }
  return db.query(selectQuery, queryParams).then((result) => result.rows);
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

function selectCommentsOfArticle(id) {
  return db
    .query(
      `
      SELECT * 
      FROM comments 
      WHERE article_id = $1
      ORDER BY created_at DESC;
    `,
      [id]
    )
    .then((result) => {
      return result.rows
        ? result.rows
        : Promise.reject({ status: 404, msg: "Not Found" });
    });
}

function postCommentToArticle(id, body) {
  if (body.body && body.username) {
    return db
      .query(
        `
      INSERT INTO comments
      (body, author, article_id)
      VALUES
      ($1, $2, $3)
      RETURNING *
  `,
        [body.body, body.username, id]
      )
      .then((result) => {
        return result.rows[0];
      });
  } else {
    return Promise.reject({ status: 400, msg: "Bad Request" });
  }
}

function patchArticleByID(id, body) {
  if (body.inc_votes) {
    return db
      .query(
        `
        UPDATE articles
        SET votes = votes + $1
        WHERE article_id = $2
        RETURNING *;
    `,
        [body.inc_votes, id]
      )
      .then((result) => {
        return result.rows[0];
      });
  } else {
    return Promise.reject({ status: 400, msg: "Bad Request" });
  }
}

const deleteCommentByID = (id) => {
  if (isNaN(id)) {
    return Promise.reject({
      status: 400,
      msg: "Invalid argument. ID must be a number.",
    });
  }
  return db.query("DELETE FROM comments WHERE comment_id = $1;", [id]);
};

module.exports = {
  selectTopics,
  selectArticles,
  selectArticleByID,
  selectCommentsOfArticle,
  postCommentToArticle,
  patchArticleByID,
  deleteCommentByID,
};
