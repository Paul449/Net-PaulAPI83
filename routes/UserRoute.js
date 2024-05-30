//importing express router
const Router = require('express').Router();
//importing user model
const User = require('../Models/User');
// get api routes
Router.get('/',async(req,res)=>{
    try{
        let Users = await User.find({}).populate('user')
        res.json(Users);
    }catch(err){
        res.status(500).json('internal server error',err)
    }
});
// get a single user by its _id
Router.get('/:userId',async(req,res)=>{
    try{
        let UserID = await User.findById({_id:req.params.UserID})
        if(!UserID){
            return res.status(404).json('user does not exist');
        }
        res.json(UserID);
    }catch(error){
        res.status(500).json('internal server error:', error)
    }
});
// POST a new user
Router.post('/',async(req,res)=>{
   try{
    let newUser = await User.create(req.body);
    res.status(201).json(newUser);
   }catch(error){
    res.status(500).json('internal server error', error)
   }

});
// PUT to update a user by its _id
Router.put('/:userId',async(req,res)=>{
    try{
        let updateUser = await User.findByIdAndUpdate(req.params._id, req.body,{new:true})
        if(!updateUser){
            return res.status(404).json('user not found, please try again!!!');
        }
        res.json(updateUser)
    }catch(error){
        res.status(500).json('internal server error:',error)
    }
});
// DELETE to remove user by its _id
Router.delete('/:userId',async(req,res)=>{
    try{
        let deleteUser = await User.findByIdAndDelete()
        if(!deleteUser){
            return res.status(404).json('user not found');
        }
        res.json(deleteUser);
    }catch(error){
        res.status(500).json('internal server error', error)
    }
});


/*/api/users/:userId/friends/:friendId */

// POST to add a new friend to a user's friend list
Router.post('/:userId/friends/:friendId',(req,res)=>{
    try{

    }catch(error){
        
    }
});

// DELETE to remove a friend from a user's friend list
Router.delete('/:userId/friends/:friendId',(req,res)=>{
    try{

    }catch(error){
        
    }
});

module.exports = Router