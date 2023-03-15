const mongoose= require('mongoose');

const userSchema2= new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
   email :{
    type : String,
    required : true
   },
   phone :{
    type : Number,
    required : true
   },
   message :{
    type : String,
    required : true
   }
})

const contact= mongoose.model('contact',userSchema2);

module.exports = contact;