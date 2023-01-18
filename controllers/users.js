const { selectUsers } = require("../models/users");

module.exports.getUsers = (req, res, next) => {
  return selectUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};
