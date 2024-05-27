const mongoose = require('../config/connection');
const User = require('../Models/User');
//const seeder = require('mongoose-seed');
//database reference
const UserData = [{
    username:'PaulBilbatua89',
    email:'paul_bilbatua@hotmail.com',
},
{
    username:'GeraBiro4675',
    email:'rodbilger40@hotmail.com',
},
{
    username:'Paulbiro5678',
    email:'software_bilbatua@hotmail.com',

}];
//function create which will allow me to seed the data to my user model

async function createData(){
    try{
        await User.deleteMany({});// making sure everything is deleted from this model before seeding it with new data
        await User.create(UserData);
        console.log('data seeded succesfully');
        const users = await User.find({});
        console.log('display seeded model',users);
    }catch(error){
        console.error('something went wrong!',error);
        mongoose.connection.close() //closing connection with mongoose after seeding
    }
}
createData();

/*
User.find({}).deleteMany({})
    .then(()=>{
        User.create(UserData)
    })

*/
