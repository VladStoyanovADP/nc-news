const {
  getTopics,
  getArticles,
  getArticleByID,
  getCommentsOfArticle
} = require("./controllers.js");
const { postgresErr, customErr } = require("./errorHandlers");
const express = require("express");
const { postgresErr, customErr } = require("./errorHandlers");
const app = express();

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/articles", getArticles);

app.get("/api/articles/:id", getArticleByID);

app.get("/api/articles/:id/comments", getCommentsOfArticle);

app.use(postgresErr);
app.use(customErr);

app.all("*", (req, res) => {
  app.status(404).send({ msg: "Bad Request" });
});

module.exports = app;
