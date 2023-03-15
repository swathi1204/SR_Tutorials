const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchemastudent= new mongoose.Schema({
    name: {
        type:String,
        required : true
    },
    email :
    {
        type : String,
        required : true
    },
    password : 
    {
        type: String,
        required : true
    },
    cpassword: {
        type:String,
        required : true
    },
    board: {
        type: String,
        required : true
    },
    classs: {
        type: String,
        required : true
    },
    contactNumber: {
        type: Number,
        required : true
    },
    presentAddress: {
        type:String,
        required : true
    },
    
    subjects: {
        type: String,
        required : true
    }
    // },
    // addressProof: {
    //     type:File,
    //     required : true
    // }
})

// hashing the password
userSchemastudent.pre('save', async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password, 12);
        this.cpassword=await bcrypt.hash(this.cpassword, 12);
    }
    next();

});

const student = mongoose.model('student',userSchemastudent);

module.exports= student;