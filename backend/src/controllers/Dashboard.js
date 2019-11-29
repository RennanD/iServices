const User = require("../models/User");
const Attendance = require("../models/Attendance");
module.exports = {
  async storeAttendance(req, res) {
    const { worker } = req.params;
    const { user_id, day, schedule, scheduling, payment } = req.body;

    try {
      const attendance = await Attendance.create({
        worker,
        user: user_id,
        day,
        schedule,
        scheduling,
        payment
      });

      return res.json(attendance);
    } catch (error) {
      console.log(error);
    }
  }
};
