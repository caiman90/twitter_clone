var mongoose = require('mongoose');
mongoose.Promise = Promise

module.exports = function() {
    console.log("******** Connecting to MongoDB ********")
    mongoose.connect('mongodb://test:test@ds241055.mlab.com:41055/twitter', {useMongoClient: true}, (err) => {
        if(!err)
            console.log('******** Connected to MongoDB ********')
        else
            console.log(err)
    })
}
