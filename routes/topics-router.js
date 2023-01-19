const { getTopics, postTopic } = require("../controllers/topics");

const router = require("express").Router();

router.get("/api/topics", getTopics);
router.post("/api/topics", postTopic);

module.exports = router;
