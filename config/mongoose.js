const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to-do-app');

const db = mongoose.connection;

db.on('error', function(err){
    console.log(`Error while connecting mongoose to Database ${err}`);
});

db.once('open', function(){
    console.log("************ Database Connected Succesfully ***********");
});

module.exports = db;

