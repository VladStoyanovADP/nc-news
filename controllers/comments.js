const { deleteCommentByID } = require("../models/comments");

module.exports.deleteComment = (req, res, next) => {
  const id = req.params.id;
  deleteCommentByID(id)
    .then((result) => {
      if (result.rowCount === 1) {
        console.log(result.rowCount)
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
