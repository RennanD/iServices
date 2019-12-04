const User = require("../models/User");
const Attendance = require("../models/Attendance");
module.exports = {
  async show(req, res) {
    const { id } = req.params;

    const user = await User.findById(id).populate({
      path: "attendances",
      options: {
        sort: { createdAt: -1 }
      }
    });

    return res.json(user);
  },

  async storeAttendance(req, res) {
    //const { worker } = req.params;
    const {
      logged,
      worker_id,
      day,
      schedule,
      payment,
      completed,
      desc
    } = req.body;

    const user = await User.findById(logged);
    const worker = await User.findById(worker_id);

    try {
      const attendance = await Attendance.create({
        worker: worker.name,
        user: user.name,
        desc,
        day,
        schedule,
        payment,
        completed
      });

      user.attendances.push(attendance);
      worker.attendances.push(attendance);

      user.save();
      worker.save();

      return res.json(attendance);
    } catch (err) {
      console.log(err);
      
      res.status(400).json({error: "Verifique se todos os campos estão preenchidos"})
    }
  },

  async update(req, res) {
    const { id } = req.params;

    const { completed } = req.body;

    const attendance = await Attendance.findByIdAndUpdate(id, {
      completed
    });

    return res.json(attendance);
  },

  async showAttendance(req, res){
    const { id } = req.params

    const attendance = await Attendance.findById(id)

    return res.json(attendance)
  }
};
