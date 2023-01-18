const { deleteCommentByID, patchCommentByID } = require("../models/comments");

module.exports.deleteComment = (req, res, next) => {
  const id = req.params.id;
  deleteCommentByID(id)
    .then((result) => {
      if (result.rowCount === 1) {
        res.status(204).send({});
      } else if (result.rowCount === 0) {
        res.status(404).send({
          msg: `Could not delete: a comment with an ID of ${id} does not exist.`,
        });
      }
    })
    .catch((error) => {
      next(error);
    });
};

module.exports.patchComment = (req, res, next) => {
  const id = req.params.id;
  const { body } = req;
  patchCommentByID(id, body)
  .then((result) =>
  {
    if (!result.comment_id) {
      res.status(404).send({
        msg: `Could not update: a comment with an ID of ${id} does not exist.`,
      });
    }
    res.status(200).send({ result });
  })
  .catch((error) => {
    next(error);
  });
};
