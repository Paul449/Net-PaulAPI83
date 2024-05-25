//importing schema and model packages from mongoose
const { ObjectId } = require('bson');
const {Schema,Model} = require('mongoose');
//creating schema for Reaction model
const ReactionSchema = new Schema({
    ReactionID:{
        data:ObjectId,
        default:Schema.Types.ObjectId 
    },
    reactionBody:{
        data:String,
        required:true,
        validate:{
            max:[280,"280 character maximum"]
        }
    },
    username:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default: Date.now(), // setting
        get:function(t){ //getter method to format the timestamp on query

        }
    }
},
{
    timestamps:true,

});
//exporting Reaction model
module.exports = Reaction;

