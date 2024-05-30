//importing express library
const express = require('express');
//database connection mongoose
const db = require('./config/connection');
const seeds = require('./seeds');
//require routes
const routes = require('./routes')
//port number
const PORT = process.env.PORT||3002;
//applying express to our app
const app = express();
//middleware for incoming requests and parsing each one to JSON format
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//listen to app through this port
app.use(routes);
//run application throught port 3002
db.once('open',()=>{
    app.listen(PORT,()=>{
        console.log(`listening on port:${PORT}`)
    });
});