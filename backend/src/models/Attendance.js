const { model, Schema } = require("../database");

const AttendanceSchema = new Schema({
  woker: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  day: {
    type: Date,
    required: true
  },
  schedule: {
    type: Date,
    required: true
  },
  scheduling: {
    type: Boolean,
    required: true
  },
  payment: {
    type: String,
    required: true
  }
});

module.exports = model("Attendance", AttendanceSchema);
