
//models
const ReactionSchema = require('../Models/Reaction');
const Thought = require('../Models/Thought');
//import path
const path = require('path');
//defining router from express
const Router = require('express').Router();
// GET to get all thoughts
Router.get('/',async (req,res)=>{
    try{
    let thoughts = await Thought.find({})
    res.status(200).json(thoughts)
    }catch(err){
        res.status(500).json('internal server error',err)
    }
});

// GET to get a single thought by its _id
Router.get('/:thoughtId',async(req,res)=>{
    try{
    let thoughts = await Thought.findOne({_id:req.params.thoughtId})
    if(!thoughts){
        return res.status(404).json({ message: 'this thought does not exist' });
    }
    res.json(thoughts);
    }catch(err){
        res.status(500).json({message:'internal server error'},err)
    }
});
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
Router.post('/',async(req,res)=>{
    try{
    let newThought = await Thought.create(req.body)
    res.json(newThought)
    }catch(err){
        res.status(500).json({message:'internal server error'},err)
    }
});
// PUT to update a thought by its _id
Router.put('/:thoughtId',async (req,res)=>{
    try{
    let updateThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body,{new: true}) //body of thought id
    if(!updateThought){
        res.status(404).json({message:'Sorry, this thought does not exist, retry again!!!'})
    }
    return res.status(200).json({updateThought});
    }catch(err){
        return res.status(500).json({message:'internal server error'},err)
    }
});
// DELETE to remove a thought by its _id
Router.delete('/:thoughtId',async (req,res)=>{
    try{
    let deleteThought = await Thought.findByIdAndDelete({_id:req.params.thoughtId})
    res.status(200).json(deleteThought)
    }catch(err){
        res.status(500).json({message:'internal server error:'},err)
    }
});

/*/api/thoughts/:thoughtId/reactions */

// POST to create a reaction stored in a single thought's reactions array field
Router.post('/:thoughtId/reactions',async(req,res)=>{
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
Router.delete('/:thoughtId/reactions/:reactionsId',async(req,res)=>{
    try{
        let removeReaction = await Thought.findOneAndUpdate({_id:req.params.thoughtId},{$pull:{reactions:req.body}},{new:true, useFindAndModify:false})
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
