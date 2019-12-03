const User = require("../models/User");
const Attendance = require("../models/Attendance");
module.exports = {
  async storeAttendance(req, res) {
    //const { worker } = req.params;
    const { day, schedule, payment } = req.body;

    try {
      const attendance = await Attendance.create({
        day,
        schedule,
        payment
      });

      return res.json(attendance);
    } catch (error) {
      console.log(error);
    }
  }
};
