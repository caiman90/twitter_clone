var pg = require('pg');

var dbConfig = {
    client :'pg',
    connection:{
        host: 'localhost',
        user: 'twitteruser',
        password: 'password1',
        database: 'twitter',
        charset: 'utf8'
    }

};
var knex = require('knex')(dbConfig);
var Bookshelf = require('bookshelf')(knex);

if (dbConfig.pool && dbConfig.pool.max !== 0) {
    this.initializePool(dbConfig);
}

module.exports.Bookshelf = Bookshelf;