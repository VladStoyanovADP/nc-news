const {
  selectTopics,
  selectArticles,
  selectArticleByID,
  patchArticle,
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

function patchArticleVotes(req, res, next)
{
  const id = req.params.id;
  const { body } = req;

  // Making sure the article exists
  selectArticleByID(id).catch(next);

  return patchArticle(id, body)
  .then(article =>
  {
    res.status(200).send({ article })
  })
  .catch(next);
}

module.exports = {
  getTopics,
  getArticles,
  patchArticleVotes,
  getArticleByID,
  patchArticleVotes
};