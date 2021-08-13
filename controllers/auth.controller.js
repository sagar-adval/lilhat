const User = require("../models").User;
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //Find the user
    const user = await User.findOne({ where: { email } });

    //Check if user exists
    if (!user) return res.status(404).send({ message: "User not found!" });

    //Check if the password matches
    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).send({ message: "Incorrect password!" });
  } catch (error) {
    console.log(error);
  }
  return res.send("haksj");
};

const register = async (req, res) => {};

module.exports = { login, register };
