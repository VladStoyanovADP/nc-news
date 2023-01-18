const { selectUsers, selectUser } = require("../models/users");

module.exports.getUsers = (req, res, next) => {
  return selectUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};

module.exports.getUser = (req, res, next) => 
{
  let username = req.params.username
  return selectUser(username)
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch(next);
};