const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/auth");

function generateToken(params = {}) {
  return jwt.sign(params, config.key, {
    expiresIn: 4000000
  });
}

module.exports = {
  async register(req, res) {
    let {
      name,
      cpf,
      email,
      phone,
      password,
      passConfirm,
      typeUser,
      street,
      number,
      neighborhood,
      city,
      zipcode,
      complement,
      documents
    } = req.body;

    try {
      if (await User.findOne({ cpf }))
        return res
          .status(400)
          .json({ error: "Já Existe um usuario com este CPF" });
      if (await User.findOne({ email }))
        return res
          .status(400)
          .json({ error: "Já Existe um usuario com este E-mail" });
      if (password !== passConfirm)
        return res.status(400).json({ error: "As senhas não conferem!" });
      const hash = await bcrypt.hash(password, 16);
      password = hash;

      const user = await User.create({
        name,
        cpf,
        phone,
        email,
        password,
        typeUser,
        street,
        number,
        neighborhood,
        city,
        zipcode,
        complement,
        documents
      });
      password = undefined;

      return res.json({
        user,
        token: generateToken({ id: user._id })
      });
    } catch (err) {
      console.log(err);

      return res
        .status(400)
        .json({ error: "Verifique se os dados estão corretos." });
    }
  },

  async authetication(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(400).json({ error: "Usuário não encontrado!" });
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ error: "Senha inválida!" });
    user.password = undefined;

    return res.json({
      user,
      token: generateToken({ id: user._id })
    });
  }
};