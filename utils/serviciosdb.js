
const bd = require('./bd');

const getAll = (tableName) => bd(tableName).select('*')

module.exports = { getAll }