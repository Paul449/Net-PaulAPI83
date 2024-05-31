//importing schema and types packages from mongoose
const {Schema, model, Types } = require('mongoose');
const ReactionSchema = require('./Reaction');
//schema for thoughts
const thoughtSchema = new Schema({
    thoughtText:{
        type:String,
        required:true,
        minLength:1,
        maxLength:280,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    username:{
        type:String,
        required:true,
    },
    reactions:[ReactionSchema] 
},
{
    toJSON:{
        virtuals:true,
        getters:true,
    },
    id:false,
});
//create virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length; //retrieving reactions from users length
})
//create thought model instance from schema
const thought = model('thought',thoughtSchema);
//export model
module.exports = thought;

