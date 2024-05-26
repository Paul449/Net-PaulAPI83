//importing express library
const express = require('express');
//
//port number
const PORT = 3002;
//applying express to our app
const app = express();
//database name
//databse variable for
//middleware for incoming requests and parsing each one to JSON format
app.use(express.json())
//listen to app through this port
