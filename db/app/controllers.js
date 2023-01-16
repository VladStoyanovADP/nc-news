const {
  selectTopics,
  selectArticles
} = require("./models.js");

const getTopics = (req, res) => {
  return selectTopics().then(topics => {
      res.status(200).send({ topics });
    })
};

const getArticles = (req, res) => {
  return selectArticles().then((articles) => {
    res.status(200).send({ articles });
  });
};

module.exports = {
  getTopics,
  getArticles,
};