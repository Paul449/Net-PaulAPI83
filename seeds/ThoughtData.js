
const mongoose = require('../config/connection');
const thought = require('../Models/Thought');
const ThoughtData =[{
    thoughtText:'Thoughts are words of our minds',
    username:'PaulBilbatua89',
},
{
    thoughtText:'Everyone has a plan until they get punched in the face',
    username:'GeraBiro4675',

},
{
    thoughtText:'I want to eat ice cream',
    username:'Paulbiro5678',
}]
//seeding thought model
const seedThought = async function(){
    try{
        await thought.deleteMany({});
        await thought.create(ThoughtData);
        console.log('seeding module successfully');
        const thoughts = await thought.find({});
        console.log(thoughts);
    }catch(error){
        console.error('something unexpectely happened');
        mongoose.connection.close();
    }
}
seedThought();