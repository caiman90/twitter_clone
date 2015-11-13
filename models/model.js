var Bookshelf = require('../db').Bookshelf;
var User = Bookshelf.Model.extend({
    tableName:'users',
    tweets: function() {
        return this.hasMany(Tweet, "user_id");
    }
});
var Tweet = Bookshelf.Model.extend({
    tableName:'tweets',
    author: function() {
        return this.hasOne(User);
    }
});

module.exports= {
    User:User,
    Tweet:Tweet
}