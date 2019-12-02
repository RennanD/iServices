const User = require("../models/User");

module.exports = {
  async show(req, res) {
    try {
      const { user_id } = req.params;

      const user = await User.findById(user_id);

      console.log(user);
      return res.json(user);
    } catch (error) {
      console.log(error);
    }
  }
};
