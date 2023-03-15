const express= require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require("../db/conn");
const User= require("../models/userSchema");


const contact= require("../models/userSchema2");

const tutor= require("../models/userSchema3");

const student = require("../models/userSchemastudent");

router.get('/',(req, res)=> {
    res.send('hello world from server');
});

// router.get('/about',middleware,(req, res)=> {
// console.log('hello my about');
// res.send('hello about world');
// });

router.get('/contact',async(req, res)=> {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    // res.cookie("jwtoken","swathi");
   
    try{
        const contacts= await contact.find();
        // console.log(contacts);
        res.send({contacts});
    }
    catch(err){
        console.log(err);
    }

});

router.get('/signin',(req, res)=> {
res.send('hello login world');
});

router.get('/signup',(req, res)=> {
res.send('hello register world');
});

//contact
router.post('/contact', async(req,res)=>{
    const{name, email, phone, message}= req.body;
   
    if(!name || !email || !phone || !message){
        return res.status(422).json({error:"please fill the field properly"});
    }
    try {
        const contacts= new contact({name, email, phone, message});

        const contactRegister = await contacts.save();
        if(contactRegister){
            res.status(201).json({message: "message received successfully"});

        }
        else
        {
            res.status(500).json({error:"failed to receive"});
        }
    }
    
 catch(err){
    console.log(err);
}

});

//register
router.post('/register',async (req,res)=>{

    const {name, email,  phone, dateofbirth, password, cpassword}=req.body;
    
    if(!name || !email || !phone || !dateofbirth || !password || !cpassword ){
          return res.status(422).json({error:"please fill the field properly"});
    }

    try{
        const userExist = await User.findOne({email:email})
        
        if(userExist){
            return res.status(422).json({error: "email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error: "password not matching"});
        }
        else{

        const user = new User ({name, email,  phone, dateofbirth, password, cpassword});
        
        
        const userRegister = await user.save();

        if(userRegister){
            res.status(201).json({message: "user registered successfully"});

        }
        else
        {
            res.status(500).json({error:"failed to register"});
        }
    }

    } catch(err){
        console.log(err);
    }
    
    });

    // || !addressProof

    //tutorregister
router.post('/tutorregister',async (req,res)=>{

    const {name, email, password, cpassword, education, contactNumber, presentAddress, permanentAddress, subjects}=req.body;
    
    if(!name || !email || !password || !cpassword || !education || !contactNumber || !presentAddress || !permanentAddress || !subjects){
          return res.status(422).json({error:"please fill the field properly"});
    }

    try{
        const tutorExist = await tutor.findOne({email:email})
        
        if(tutorExist){
            return res.status(422).json({error: "email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error: "password not matching"});
        }
        else{

        const tutors = new tutor ({name, email, password, cpassword, education, contactNumber, presentAddress, permanentAddress, subjects});
        
        
        const tutorRegister = await tutors.save();

        if(tutorRegister){
            res.status(201).json({message: "tutor registered successfully"});

        }
        else
        {
            res.status(500).json({error:"failed to register"});
        }
    }

    } catch(err){
        console.log(err);
    }
    
    });


     //studentregister
router.post('/studentregister',async (req,res)=>{

    const {name, email, password, cpassword, board,classs, contactNumber, presentAddress,subjects}=req.body;
    
    if(!name || !email || !password || !cpassword || !board || !classs || !contactNumber || !presentAddress || !subjects){
          return res.status(422).json({error:"please fill the field properly"});
    }

    try{
        const studentExist = await student.findOne({email:email})
        
        if(studentExist){
            return res.status(422).json({error: "email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error: "password not matching"});
        }
        else{

        const students = new student ({name, email, password, cpassword, board, classs, contactNumber, presentAddress, subjects});
        
        
        const studentRegister = await students.save();

        if(studentRegister){
            res.status(201).json({message: "student registered successfully"});

        }
        else
        {
            res.status(500).json({error:"failed to register"});
        }
    }

    } catch(err){
        console.log(err);
    }
    
    });



    //login route

    router.post('/signin', async(req, res)=> {
        try{
            let token;

            const {email,password}= req.body;

            if(!email || !password)
            {
                return res.status(400).json({error:"please fill the data"});
            }

            const userLogin = await User.findOne({email:email});
            
            if(userLogin ){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if( !isMatch){
                res.status(400).json({error:"invalid credentials"});
            }else {
                res.json({message:"user sign in successfully"});
            }
        }
        else{
            res.status(400).json({error:"invalid credentials"});
        } 
        }catch(err){
               console.log(err);
        }
    });


    //logout
    router.get('/logout', (req,res) => {
        console.log(`hello my logout page`);
        res.clearCookie('jwtoken',{path:"/"})
        res.status(200).send(`User Logout`);
          });


module.exports = router;


//using promises
// router.post('/register',async (req,res)=>{

// const {name, email,  phone, work, password, cpassword}=req.body;

// if(!name || !email || !phone || !work || !password || !cpassword ){
//       return res.status(422).json({error:"please fill the field properly"});
// }
// User.findOne({email:email})
// .then  ((userExist)=>{
//     if(userExist){
//         return res.status(422).json({error: "email already exist"});
//     }

//     const user = new User ({name, email,  phone, work, password, cpassword});
//     user.save().then(()=>{
//         res.status(201).json({message: "user registered successfully"});
//     }).catch((err)=> res.status(500).json({error:"failed to register"}));
// }).catch(err =>{ console.log(err);});

// });