const {
  selectTopics,
} = require("./models.js");

const getTopics = (req, res) => {

  return selectTopics()
    .then(topics => {
      res.status(200).send({ topics });
    })
};

module.exports = {
  getTopics,
};
