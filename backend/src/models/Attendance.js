const { model, Schema } = require("../database");

const AttendanceSchema = new Schema({
  day: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: true
  },
  payment: {
    type: String,
    required: true
  }
});

module.exports = model("Attendance", AttendanceSchema);
