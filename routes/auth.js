const router = require("express").Router();

router.get("/login", (req, res) => {
  return res.send("Login Screen");
});

module.exports = router;
