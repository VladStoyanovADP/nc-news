const {
  selectTopics,
  selectArticles,
  selectArticleByID
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

const getArticleByID = (req, res) => {

  const id = req.params.id;
  return selectArticleByID(id).then(article => {
    res.status(200).send({ article });
  });
};

module.exports = {
  getTopics,
  getArticles,
  getArticleByID,
};