
const { selectTopics, postNewTopic } = require("../models/topics");

module.exports.getTopics = (req, res, next) =>
{
  return selectTopics()
    .then((topics) => {
      res.status(200).send({ topics });
    })
    .catch(next);
};

module.exports.postTopic = (req, res, next) => {
  const { body } = req;
  return postNewTopic(body)
    .then((topic) => {
      res.status(201).send({ topic });
    })
    .catch(next);
};