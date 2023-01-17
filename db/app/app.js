const { getTopics, getArticles } = require("./controllers.js");
const express = require("express");
const { postgresErr, customErr } = require("./errorHandlers");
const app = express();

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/articles", getArticles);

app.use(postgresErr);
app.use(customErr);

module.exports = app;
