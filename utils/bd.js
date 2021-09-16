const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bdd.proycto.final',
        pool: { min:1, max:10 },
    }
});

module.exports = knex;
