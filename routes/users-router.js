const { getUsers } = require("../controllers/users");
const router = require("express").Router();

router.get("/api/users", getUsers);

module.exports = router;
