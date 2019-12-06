const { Schema, model } = require("../database");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  typeUser: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  number: {
    type: String
  },
  neighborhood: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required:true
  },
  city: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  activeChats: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  description: String,
  documents: [String],
  attendances: [
    {
      type: Schema.Types.ObjectId,
      ref: "Attendance"
    }
  ]
});

module.exports = model("User", UserSchema);
