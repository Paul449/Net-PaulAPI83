//import schema and types packages from mongoose to work with database datatypes and creating schema
const {Schema, model, Types} = require('mongoose');
// creating User model
const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        validate:{
            validator:function(v){
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
            }
        }
    },
    thoughts:[

        {
            type:Schema.Types.ObjectId,
            ref:'thought',
        }
    ],
    friends:[ 
        
        {
            type:Schema.Types.ObjectId,
            ref:'user',
        }
    ],
},
{
    toJSON:{
        virtuals:true
    },
    id:false
});
//create virtual named friendCount to get the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})
//create instance of user schema
const User = model('user', UserSchema);
//exporting User model
module.exports = User;
