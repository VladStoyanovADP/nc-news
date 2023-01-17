const {
  getTopics,
  getArticles,
  getArticleByID,
  getCommentsOfArticle,
  patchArticle,
} = require("./controllers.js");
const { postgresErr, customErr } = require("./errorHandlers");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/articles", getArticles);

app.get("/api/articles/:id", getArticleByID);

app.get("/api/articles/:id/comments", getCommentsOfArticle);

app.patch("/api/articles/:id", patchArticle);

app.use(postgresErr);
app.use(customErr);



module.exports = app;
