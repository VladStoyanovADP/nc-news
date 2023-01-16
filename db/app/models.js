const db = require("../connection.js");

function selectTopics() {
  return db.query(`SELECT * FROM topics`).then((result) => result.rows);
}

function selectArticles() {
  return db.query(`SELECT * FROM articles`).then((result) => result.rows);
}

module.exports = {
  selectTopics,
  selectArticles,
};
