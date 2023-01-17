const {
  getTopics,
  getArticles,
  getArticleByID,
  getCommentsOfArticle,
  postComment,
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

app.post("/api/articles/:id/comments", postComment);

app.patch("/api/articles/:id", patchArticle);

app.use(postgresErr);
app.use(customErr);

app.all("*", (req, res) => {
  app.status(404).send({ msg: "Bad Request" });
});

module.exports = app;
