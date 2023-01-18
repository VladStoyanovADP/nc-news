const { getUsers, getUser } = require("../controllers/users");
const router = require("express").Router();

router.get("/api/users", getUsers);
router.get("/api/users/:username", getUser);

module.exports = router;
