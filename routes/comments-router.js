const { deleteComment, patchComment } = require("../controllers/comments");

const router = require("express").Router();

router.delete("/api/comments/:id", deleteComment);
router.patch("/api/comments/:id", patchComment);

module.exports = router;
