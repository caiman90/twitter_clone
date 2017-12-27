var Tweet = require('../models/Tweet')

module.exports = (app) => {
    // **** Saving user tweet
    app.post('/api/tweet',(req,res) => {
        var request = req.body
        request.date = '22/07/2007'; // hard wire user for now
        request.time = '22:51';
        var tweet = new Tweet(request);
        tweet.save((err,result)=>{
            if(err){
                console.error('Error saving tweet : ' + err);
                res.status(500).send({message:'Saving tweet error'});
            }
            res.send(tweet).status(200);
        })
    })

    app.get('/api/tweets',async (req, res) => {
        var tweets = await Tweet.find({});
        res.status(200).send(tweets);
    })


}

