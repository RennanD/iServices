const Chat = require("../models/Chat");
const User = require("../models/User");

module.exports = {
  async storeChat(req, res) {
    const { worker_id } = req.params;
    const { user_id } = req.body;

    const chat = await Chat.create({
      users: [worker_id, user_id]
    });

    return res.json(chat);
  },

  async storeMessege(req, res) {
    const { chat_id } = req.params;
    const chat = await Chat.findById(chat_id);

    return res.json(chat);
  }
};
