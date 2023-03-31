const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const upload = multer();
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
    primelocation : {
        type: String,
        required : true
    },
    
    subjects: {
        type: String,
        required : true
    }
    ,
    image: {
        type : String,
        required : true
    }
})

// hashing the password
userSchemastudent.pre('save', async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password, 12);
        this.cpassword=await bcrypt.hash(this.cpassword, 12);
    }
    next();

});

//token generation
userSchemastudent.methods.generateAuthToken = async function(){
    try{
       let token = jwt.sign({_id:this._id }, process.env.SECRET_KEY);
       this.tokens = this.tokens.concat({token:token}); 
       await this.save();
       return token;
    }catch(err){
        console.log(err);

    }
}


const student = mongoose.model('student',userSchemastudent);

module.exports= student;