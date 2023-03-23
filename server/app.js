const express= require('express');
const dotenv= require('dotenv');
const mongoose= require('mongoose');
const app = express();
const finds = require('./router/find');

// const cors = require('cors')
// const DB= 'mongodb+srv://swathipardeshi:swathi01@cluster0.y5stpf9.mongodb.net/mernstack?retryWrites=true&w=majority'
dotenv.config({path:'./config.env'});

require('./db/conn');

// const User = require('./models/userSchema');

app.use(express.json());
// link the router files 
app.use(require('./router/auth'));

app.use("./router/find",finds);

const DB= process.env.DATABASE;
const PORT= process.env.PORT;
// , {
//     useNewUrlParser:true,
//     useCreateIndex: true,
//     useUnifiesTopology: true,
//     useFindAndModify:false
// }
// mongoose.connect(DB).then(()=>{
//     console.log('connetion successful');
// }).catch((err)=> console.log('no connection'));
//middleware

// var cors = require('cors')

// app.use(cors())

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    // Access-Control-Allow-Credentials: true,
    optionSuccessStatus:200 

}
app.use(cors(corsOptions));

const middleware= (req,res,next)=>{
    console.log('hello my middleware');
    next();
}

// middleware();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    next();
     });



console.log('subscribe');
app.listen(5000, ()=> {
    console.log(`server is running ${PORT}`); 
});