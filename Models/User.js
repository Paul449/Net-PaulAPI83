//import schema and types packages from mongoose to work with database datatypes and creating schema
const {Schema, model} = require('mongoose');
// creating User model
const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        Unique: true,
        trim: true
    },
    email:{
        type: String,
        Unique: true,
        required: true,
        validate:{
            validator:function(v){
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            }
        }
    },
    thoughts:{
        reference:{
            type:Schema.Types.ObjectId,
            ref:'Thought',
        }
    },
    friends:{
        reference:{
            type:Schema.Types.ObjectId,
            ref:'User',
        }
    },
},
{
    toJSON:{
        virtuals:true
    },
    id:true
});
//create virtual named friendCount to get the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})
//create instance of user schema
const User = model('User', UserSchema);
//exporting User model
module.exports = User;
