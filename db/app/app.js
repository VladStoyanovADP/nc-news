const { getTopics, getArticles } = require("./controllers.js");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/articles", getArticles);

module.exports = app;
