const { Router } = require('express');

//defining router from express
const express = require('express').Router();
// GET to get all thoughts
Router.get('/api/thoughts',(req,res)=>{

});
// GET to get a single thought by its _id
Router.get('/api/thoughts/:_id',(req,res)=>{

});
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
Router.post('/api/thoughts',(req,res)=>{

});
// PUT to update a thought by its _id
Router.put('/api/thoughts/:_id',(req,res)=>{

});
// DELETE to remove a thought by its _id
Router.delete('/api/thoughts/:_id',(req,res)=>{

});

/*/api/thoughts/:thoughtId/reactions */

// POST to create a reaction stored in a single thought's reactions array field
Router.post('/api/thoughts/:thoughtId/reactions',(req,res)=>{

});
// DELETE to pull and remove a reaction by the reaction's reactionId value
Router.delete('/api/thoughts/:thoughtId/reactions',(req,res)=>{

});