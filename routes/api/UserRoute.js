const { Router } = require('express');

//importing express router
const express = require('express').Router();
// get api routes
Router.get('/api/user',(req,res)=>{

});
// get a single user by its _id
Router.get('/api/user/:_id',(req,res)=>{

});
// POST a new user
Router.post('/api/user/:_id',(req,res)=>{

});
// PUT to update a user by its _id
Router.put('/api/user/:_id',(req,res)=>{

});
// DELETE to remove user by its _id
Router.delete('/api/user/:_id',(req,res)=>{

});


/*/api/users/:userId/friends/:friendId */

// POST to add a new friend to a user's friend list
Router.post('/api/users/:userId/friends/:friendId',(req,res)=>{

});

// DELETE to remove a friend from a user's friend list
Router.delete('/api/users/:userId/friends/:friendId',(req,res)=>{

});