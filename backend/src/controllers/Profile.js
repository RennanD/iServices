const User = require("../models/User");

module.exports = {
  async show(req, res) {
    const { user_id } = req.params;

    const user = User.findById(user_id);

    return res.json(user);
  }
};
