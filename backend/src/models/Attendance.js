const { model, Schema } = require("../database");

const AttendanceSchema = new Schema(
  {
    worker: {
      type: String,
      required: true
    },
    user: {
      type:String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
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
    },
    completed: {
      type: Boolean
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Attendance", AttendanceSchema);
