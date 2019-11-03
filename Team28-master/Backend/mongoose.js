  
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://opportunityHack:opportunityHack@cluster0-fqxrh.mongodb.net/test?retryWrites=true', {useNewUrlParser : true, poolSize : 100} ,(err) =>{
    if (err) throw err;
    console.log("mongoose server running");
}); 

module.exports = {mongoose};