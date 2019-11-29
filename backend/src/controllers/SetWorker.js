const Work = require("../models/Work");
const User = require("../models/User");
module.exports = {
  async index({ res }) {
    const works = await Work.find();

    return res.json(works);
  },

  async store(req, res) {
    const { name } = req.body;
    const work = await Work.create({
      name
    });
    return res.json(work);
  },
  async storeWorker(req, res) {
    const { id } = req.params;
    const { user_id } = req.body;
    try {
      const work = await Work.findById(id);

      work.workers.push(user_id);

      await work.save();

      return res.json(work);
    } catch (err) {
      console.log(err);
    }
  },

  async show(req, res) {
    const { id } = req.params;
    const work = await Work.findById(id).populate("workers");

    return res.json(work);
  }
};
