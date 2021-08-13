const router = require("express").Router();

router.post("/login", (req, res) => {
  return res.send(["Login Screen", req.body]);
});

module.exports = router;
