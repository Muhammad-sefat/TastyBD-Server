const { generateToken } = require("../config/jwtProvider");
const userService = require("../services/userService");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = generateToken(user._id);
    return res.status(200).send({ jwt, message: "Register Success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await userService.getUserByEmail(email);
    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Password" });
    }
    const jwt = generateToken(user._id);
    return res.status(200).send({ jwt, message: "Login Success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};
