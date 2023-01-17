const {
  getTopics,
  getArticles,
  patchArticleVotes,
} = require("./controllers.js");
const express = require("express");
const { postgresErr, customErr } = require("./errorHandlers");
const app = express();

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/articles", getArticles);

app.patch("/api/articles/:id", patchArticleVotes);

app.use(postgresErr);
app.use(customErr);

app.all("*", (req, res) => {
  app.status(404).send({ msg: "Bad Request" });
});

module.exports = app;
