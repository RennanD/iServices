const Chat = require("../models/Chat");
const User = require("../models/User");

module.exports = {
  async storeChat(req, res) {
    const { user_id, worker_id } = req.body;

    const chat = await Chat.create({});
    const user = await User.findById(user_id);
    const worker = await User.findById(worker_id);

    chat.users.push(worker_id, user_id);
    user.activeChats.push(chat._id);
    worker.activeChats.push(chat._id);

    await user.save();
    await worker.save();
    await chat.save();
    return res.json(chat);
  },

  async storeMessege(req, res) {
    const { id } = req.params;
    const { messege } = req.body;
    const chat = await Chat.findById(id);

    chat.messeges.push(messege);
    await chat.save();
    return res.json(chat);
  },
  async listChats(req, res) {
    const { logged } = req.params;

    const loggedUser = await User.findById(logged);

    const chats = await Chat.find({
      $and: [{ _id: { $in: loggedUser.activeChats } }]
    });

    return res.json(chats);
  },

  async showChat(req, res) {
    const { chat_id } = req.params;

    const chat = await Chat.findById(chat_id);

    return res.json(chat);
  }
};
