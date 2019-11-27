const database = require("mongoose");

database.connect(process.env.DB_NAME, {
  useNewUrlParser: true,
  useFindAndModify: true
});

module.exports = database;
