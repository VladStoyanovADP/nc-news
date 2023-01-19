const {
  selectArticles,
  selectArticleByID,
  selectCommentsOfArticle,
  postCommentToArticle,
  patchArticleByID,
  postNewArticle,
  deleteArticleByID,
} = require("../models/articles");

module.exports.getArticles = (req, res, next) => {
  const { sort_by, order, topic, limit, p } = req.query;
  return selectArticles(sort_by, order, topic, limit, p)
    .then(({ articles, article_count }) => {
      res.status(200).send({ articles, article_count });
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
  const { limit, p } = req.query;

  // Making sure the article exists
  selectArticleByID(id).catch(next);

  return selectCommentsOfArticle(id, limit, p)
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

module.exports.postArticle = (req, res, next) => {
  const { body } = req;

  if (!body.article_img_url)
  {
    body.article_img_url =
    "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700"
  }
  
  return postNewArticle(body)
    .then((article) => {
      res.status(201).send({ article });
    })
    .catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
  const id = req.params.id;

  // Making sure the article exists
  selectArticleByID(id).catch(next);

  return deleteArticleByID(id)
    .then(() => {

      res.status(204).send({});
    })
    .catch((error) => {
      next(error);
    });
};
