const { deleteComment } = require("../controllers/comments");

const router = require("express").Router();

router.delete("/api/comments/:id", deleteComment);

module.exports = router;
