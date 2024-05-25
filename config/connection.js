//importing mongoose library
const mongoose = require('mongoose');
//connecting mongoose with localhost
mongoose.connect('mongodb://127.0.0.1:27017/SocialMediaDB').then(()=>{console.log(' connection successful')})//creating database and testing connection
//export mongoose connection for models
module.exports = mongoose.connection;