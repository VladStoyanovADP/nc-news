const { postgresErr, customErr } = require("./errorHandlers");
const express = require("express");

const apiRouter = require("./routes/api-router");
const articlesRouter = require("./routes/articles-router");
const usersRouter = require("./routes/users-router");
const topicsRouter = require("./routes/topics-router");
const commentsRouter = require("./routes/comments-router");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(apiRouter);
app.use(usersRouter);
app.use(articlesRouter);
app.use(topicsRouter);
app.use(commentsRouter);

app.use(postgresErr);
app.use(customErr);

module.exports = app;
