const {
  selectTopics,
  selectArticles,
  selectArticleByID,
  selectCommentsOfArticle,
  postCommentToArticle,
  patchArticleByID,
} = require("./models.js");

const getTopics = (req, res, next) => {
  return selectTopics()
    .then((topics) => {
      res.status(200).send({ topics });
    })
    .catch(next);
};

const getArticles = (req, res, next) => {
  return selectArticles()
    .then((articles) =>
    {
      res.status(200).send({ articles });
    })
    .catch(next);
};

const getArticleByID = (req, res, next) => {
  const id = req.params.id;
  return selectArticleByID(id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

const getCommentsOfArticle = (req, res, next) => {
  const id = req.params.id;

  // Making sure the article exists
  selectArticleByID(id).catch(next);

  return selectCommentsOfArticle(id)
    .then((comments) => {
      res.status(200).send({ comments });
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

function patchArticle(req, res, next) {
  const id = req.params.id;
  const { body } = req;

  // Making sure the article exists
  selectArticleByID(id).catch(next);

  return patchArticleByID(id, body)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
}

module.exports = {
  getTopics,
  getArticles,
  getArticleByID,
  getCommentsOfArticle,
  postComment,
  patchArticle,
};