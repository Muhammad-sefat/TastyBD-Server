const User = require("../models/user_models");
const bcrypt = require("bcrypt");

module.exports = {
  async createUser(userData) {
    try {
      let { fullName, emailValue, password, role } = userData;
      let existEmail = User.findOne({ email: emailValue });
      if (existEmail) {
        throw new Error("User Already Exist with Email");
      }

      password = await bcrypt.hash(password, 8);

      const user = await User.create({
        fullName,
        email: emailValue,
        password: password,
        role,
      });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getUserByEmail(email) {
    try {
      const user = User.findOne({ email: email });
      if (!user) {
        throw new Error("User Not Found");
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async findUserById(userId) {
    try {
      const user = await User.findById(userId).populate("adresses");
      if (!user) {
        throw new Error("User Not Found");
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
