//importing mongoose library
const mongoose = require('mongoose');
//connecting mongoose with localhost
mongoose.connect('mongodb://localhost:27017');
//export mongoose connection for models
module.exports = mongoose.connection;