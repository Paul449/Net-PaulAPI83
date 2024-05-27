//importing express library
const express = require('express');
//require models
const User = require('./Models');
const Thought = require('./Models');
//port number
const PORT = process.env.PORT||3002;
//applying express to our app
const app = express();
//
app.use(express.urlencoded({extended:true}));
//middleware for incoming requests and parsing each one to JSON format
app.use(express.json());
//listen to app through this port
