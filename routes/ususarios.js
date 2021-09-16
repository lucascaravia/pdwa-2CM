const express = require ( 'express')
const router = express.router();
const user = require('/models/user');



router.post( "/",[
      check("nombre", "El Nombre debe ser obligatorio").not().isEmpty(),
      check("email", "Agregar un email valido").isEmail(),
      check("pass", "El password debe contener como minimo 8 caracteres").isLength({
        min: 8,
      }),
    ],
    userController.crearUsuario
  );
  
  router.get("/", (req, res) => {
    User.find({}, (err, user) => {
      if (err) {
        res.status(500).send({ error: "Could not fetch users" });
      } else {
        res.send(user);
      }
    });
  });
  
  module.exports = router;