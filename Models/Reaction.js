//importing schema and model packages from mongoose
const { ObjectId } = require('bson');
const {Schema, Types} = require('mongoose');
//creating schema for Reaction model
const ReactionSchema = new Schema({
    ReactionID:{
        type:Schema.Types.ObjectId,
        default:() => new Types.ObjectId()
    },
    reactionBody:{
        type:String,
        required:true,
        maxLength:280
    },
    username:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default: Date.now, // setting
        get:function(timestamp){ //getter method to format the timestamp on query
           return new Intl.DateTimeFormat('en-US',{
            dateStyle:'full',
            timeStyle:'short'
           }).format(timestamp)
        }
    }
},
{
    toJSON:{

        getters:true,
    },
    timestamps:true,
    id:false,
});
//exporting Reaction model
module.exports = ReactionSchema;

