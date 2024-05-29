const { Router } = require('express');
//models
const Thought = require('../Models/Thought');
//import path
const path = require('path');
//defining router from express
const express = require('express').Router();
// GET to get all thoughts
Router.get('/api/thoughts',async (req,res)=>{
    try{
    let thoughts = await Thought.find().populate('thought')
    res.json(thoughts)
    }catch(err){
        res.status('internal server error',err)
    }
});

// GET to get a single thought by its _id
Router.get('/api/thoughts/:_id',async(req,res)=>{
    try{
    let thoughts = await Thought.findOne({_id:req.param._id}).populate('thought')
    }catch(err){

    }
});
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
Router.post('/api/thoughts',(req,res)=>{
    try{
    let newThought = Thought.create()
    }catch(err){

    }
});
// PUT to update a thought by its _id
Router.put('/api/thoughts/:_id',(req,res)=>{
    let updateThought = Thought.findByIdAndUpdate()
});
// DELETE to remove a thought by its _id
Router.delete('/api/thoughts/:_id',(req,res)=>{
    let deleteThought = Thought.findByIdAndDelete()
});

/*/api/thoughts/:thoughtId/reactions */

// POST to create a reaction stored in a single thought's reactions array field
Router.post('/api/thoughts/:thoughtId/reactions',(req,res)=>{

});
// DELETE to pull and remove a reaction by the reaction's reactionId value
Router.delete('/api/thoughts/:thoughtId/reactions',(req,res)=>{

});
//export router
module.exports = Router;
