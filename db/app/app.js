const { getTopics, getArticles } = require("./controllers.js");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/articles", getArticles);

app.listen(8080, () => console.log("App listening on port 8080!"));

module.exports = app;
