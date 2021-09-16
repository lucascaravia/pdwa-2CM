const bd = require('./../utils/bd');
const serviciosdb = require('./../utils/serviciosdb')

const getAll = () => serviciosdb.getAll('bdd-final-usuarios');

module.exports = {getAll}