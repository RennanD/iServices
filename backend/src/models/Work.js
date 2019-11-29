const { model, Schema } = require("../database");

const WorkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  workers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = model("Work", WorkSchema);
