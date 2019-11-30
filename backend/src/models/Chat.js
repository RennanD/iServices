const { model, Schema } = require("../database");

const ChatSchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  ],
  messeges: [Object]
});

module.exports = model("Chat", ChatSchema);
