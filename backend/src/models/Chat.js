const { model, Schema } = require("../database");

const ChatSchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  messeges: [Object]
});

module.exports = model("Chat", ChatSchema);
