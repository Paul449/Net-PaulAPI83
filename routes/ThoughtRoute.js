
//models
const ReactionSchema = require('../Models/Reaction');
const Thought = require('../Models/Thought');
//import path
const path = require('path');
//defining router from express
const Router = require('express').Router();
// GET to get all thoughts
Router.get('/api/thoughts',async (req,res)=>{
    try{
    let thoughts = await Thought.find({}).populate('thought')
    res.json(thoughts)
    }catch(err){
        res.status('internal server error',err)
    }
});

// GET to get a single thought by its _id
Router.get('/api/thoughts/:_id',async(req,res)=>{
    try{
    let thoughts = await Thought.findOne({_id:req.params.thoughtId}).populate('thought')
    if(thoughts !== true){
        return res.status(404).json({ message: 'this thought does not exist' });
    }
    res.json(thoughts);
    }catch(err){
        res.status(500).json('internal server error',err)
    }
});
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
Router.post('/api/thoughts',(req,res)=>{
    try{
    let newThought = Thought.create(req.body)
    res.json(newThought)
    }catch(err){
        res.status(500).json('internal server error',err)
    }
});
// PUT to update a thought by its _id
Router.put('/api/thoughts/:_id',(req,res)=>{
    try{
    let updateThought = Thought.findByIdAndUpdate(req.body.thoughtId, req.body,{new: true}) //body of thought id
    if(updateThought !== true){
        return res.status(404).json('Sorry, this thought does not exist, retry again!!!')
    }
    res.json(updateThought)
    }catch(err){
        res.status(500).json('internal server error',err)
    }
});
// DELETE to remove a thought by its _id
Router.delete('/api/thoughts/:_id',(req,res)=>{
    try{
    let deleteThought = Thought.findByIdAndDelete({_id:req.params.thoughtId})
    res.json(deleteThought)
    }catch(err){
        res.status(500).json('internal server error:',err)
    }
});

/*/api/thoughts/:thoughtId/reactions */

// POST to create a reaction stored in a single thought's reactions array field
Router.post('/api/thoughts/:thoughtId/reactions',async(req,res)=>{
    try{
        let updateThought = await Thought.findOneAndUpdate(req.params.thoughtId,{$push:{reactions:req.body}},{new:true, useFindAndModify:false})
        if(!updateThought){
            return res.status(404).json({message:'sorry, I could not be able to find this thought, retry later!!!'})
        }
        res.json(updateThought);
    }catch(err){
        res.status(500).json('internal server error',err)
    }
});
// DELETE to pull and remove a reaction by the reaction's reactionId value
Router.delete('/api/thoughts/:thoughtId/reactions',(req,res)=>{
    try{
        let removeReaction = Thought.findOneAndUpdate({_id:req.params.thoughtId},{$pull:{reactions:req.body}},{new:true, useFindAndModify:false})
        if(!removeReaction){
            res.status(404).json('reaction not found!!!')
        }
        res.json(removeReaction);
    }catch(err){
        res.status(500).json('internal server error',err)
    }

});
//export router
module.exports = Router;
