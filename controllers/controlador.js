const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
require("dotenv").config();

const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errores: error.array() });
  }

  try {
    const { email, pass } = req.body;

    let usuario = await User.findOne({ email });

    if (usuario) {
      return res.status(400).json({ message: "El Usuario ya esta registrado" });
    }

    usuario = new User(req.body);

    const salt = await bcryptjs.genSalt(10);
    usuario.pass = await bcryptjs.hash(pass, salt);
 

    await usuario.save();

    // Crear y Firmar jsonwebtoken
    const payload = {
      usuario: {
        id: usuario.id,
      },
    };

    // firmar
    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 3600, // una hora
      },
      (error, token) => {
        if (error) throw error;

        res.json({ token: token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send("error al guardar");
  }
};