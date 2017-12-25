var mongoose = require('mongoose');

module.exports = mongoose.model('Tweet',{
    message: String,
    date: String,
    time: String,
    //author: { type: mongoose.Schema.Types.ObjectId,ref:'User' }
})