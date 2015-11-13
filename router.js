var User = require('./models/model').User;
var Tweet = require('./models/model').Tweet;
var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    new User({'id':101}).fetch({withRelated:['tweets']})
        .then(function(user){
            console.log(JSON.stringify(user));
            var userWithTweets = user.toJSON();
            res.render('Twitter',{
                user : {
                    name: userWithTweets.firstName,
                    surname:userWithTweets.lastName,
                    username:userWithTweets.username,
                    numOfTweets:userWithTweets.tweets.length
                },
                tweets : userWithTweets.tweets
            });

        }).catch(function(error){
        console.log(error);
        res.send('Error retrieving user');
    });
});


//router.get('/',function(req,res){
//    res.send('Welcome to twitter clone API');
//});


router.post('/api/tweet',function(req,res){
    var tweet=new Tweet({
        user_id:req.body.title,
        content:req.body.body,
        createdAt:req.body.author,

    });
    tweet.save().then(function(saved_tweet){
        res.send(saved_tweet.toJSON());
    }).catch(function(error){
        console.log(error);
        res.send('Error saving tweet');
    });
});

module.exports = router;
