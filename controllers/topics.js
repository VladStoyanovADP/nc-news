
const { selectTopics } = require("../models/topics");

module.exports.getTopics = (req, res, next) =>
{
  return selectTopics()
    .then((topics) => {
      res.status(200).send({ topics });
    })
    .catch(next);
};
