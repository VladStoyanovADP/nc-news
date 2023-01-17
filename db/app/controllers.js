const {
  selectTopics,
  selectArticles,
  postCommentToArticle,
  selectArticleByID,
} = require("./models.js");

const getTopics = (req, res) => {
  return selectTopics().then(topics => {
      res.status(200).send({ topics });
    })
};

const getArticles = (req, res) => {
  return selectArticles().then(articles => {
    res.status(200).send({ articles });
  });
};

const getArticleByID = (req, res, next) => {
  const id = req.params.id;
  return selectArticleByID(id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

const postComment = (req, res, next) => {

  const id = req.params.id;
  const { body } = req;

  // Making sure the article exists
  selectArticleByID(id).catch(next);

  return postCommentToArticle(id, body)
    .then((comment) => {
      res.status(201).send({ comment });
    })
    .catch(next);
};

module.exports = {
  getTopics,
  getArticles,
  getArticleByID,
  postComment,
};