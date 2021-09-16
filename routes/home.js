const express = require('express');
const router = express.router();
const model = require('./../models/serviciosUsuarios');

const get = (req, res) => {
    model.getAll()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
}
router.get('/', get);


module.exports = router