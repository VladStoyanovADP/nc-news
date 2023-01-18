const {
  selectArticles,
  selectArticleByID,
  selectCommentsOfArticle,
  postCommentToArticle,
  patchArticleByID,
} = require("../models/articles");

module.exports.getArticles = (req, res, next) => {
  const { sort_by, order, topic } = req.query;
  return selectArticles(sort_by, order, topic)
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch(next);
};

module.exports.getArticleByID = (req, res, next) => {
  const id = req.params.id;
  return selectArticleByID(id)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch(next);
};

module.exports.getCommentsOfArticle = (req, res, next) => {
  const id = req.params.id;

  // Making sure the article exists
  selectArticleByID(id).catch(next);

  return selectCommentsOfArticle(id)
    .then((comments) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};

module.exports.postComment = (req, res, next) => {
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

module.exports.patchArticle = (req, res, next) => {
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
