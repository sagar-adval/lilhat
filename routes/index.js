const router = require("express").Router();
const authRoutes = require("./auth");

router.get("/home", (req, res) => {
  return res.send("Home");
});

router.use("/auth", authRoutes);

module.exports = router;
