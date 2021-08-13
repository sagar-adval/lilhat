const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/app");

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

    //Generate auth token
    const userWithToken = generateToken(user.get({ raw: true }));
    return res.send(userWithToken);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
};

const register = async (req, res) => {};

const generateToken = (user) => {
  delete user.password;

  const token = jwt.sign(user, config.appKey, {
    expiresIn: 86400,
  });

  return { ...user, ...{ token } };
};

module.exports = { login, register };
