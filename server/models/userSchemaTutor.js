const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema3= new mongoose.Schema({
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
    education: {
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
    permanentAddress: {
        type:String,
        required : true
    },
    subjects: {
        type: String,
        required : true
    },
    primelocation : {
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
userSchema3.pre('save', async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password, 12);
        this.cpassword=await bcrypt.hash(this.cpassword, 12);
    }
    next();

});

//token generation
userSchema3.methods.generateAuthToken = async function(){
    try{
       let token = jwt.sign({_id:this._id }, process.env.SECRET_KEY);
       this.tokens = this.tokens.concat({token:token}); 
       await this.save();
       return token;
    }catch(err){
        console.log(err);

    }
}


const tutor = mongoose.model('tutor',userSchema3);

module.exports= tutor;