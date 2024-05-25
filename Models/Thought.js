//importing schema and types packages from mongoose
const {Schema, Model} = require('mongoose');
//schema for thoughts
const thoughtSchema = new Schema({
    thoughtText:{
        type:String,
        required:true,
        validate:function(char){
            if(char >= 1 && char <= 280){
                console.log('text is between specified requirements')
            } else{
                console.log('text must be between 1 to 280 characters')
            }
        }
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        get:function(){
            
        }
    },
    username:{
        type:String,
        required:true,
    },
    reactions:{
        type:Schema.Types.ObjectId,
        ref:'Reaction',
    }
},
{
    toJSON:{
        virtuals:true,
    },
    id:true,
});
//create virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
Schema.virtuals('reactionCount').get(function(){
    return this.reactions.length; //retrieving reactions from users length
})
//create thought model instance from schema
const thought = model('thought',thoughtSchema);
//export model
module.exports = thought;