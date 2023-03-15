const express= require('express');
const dotenv= require('dotenv');
const mongoose= require('mongoose');
const app = express();

// const DB= 'mongodb+srv://swathipardeshi:swathi01@cluster0.y5stpf9.mongodb.net/mernstack?retryWrites=true&w=majority'
dotenv.config({path:'./config.env'});

require('./db/conn');

// const User = require('./models/userSchema');

app.use(express.json());
// link the router files 
app.use(require('./router/auth'));

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

var cors = require('cors')

app.use(cors())

const middleware= (req,res,next)=>{
    console.log('hello my middleware');
    next();
}

// middleware();

// app.get('/',(req, res)=> {
//          res.send('hello world from server');
// });

// app.get('/about',middleware,(req, res)=> {
//     console.log('hello my about');
//     res.send('hello about world');
// });

app.get('/contact',(req, res)=> {
    res.cookie("jwtoken","swathi");
    res.send(`hello contact world`);
});

// app.get('/signin',(req, res)=> {
//     res.send('hello login world');
// });

// app.get('/signup',(req, res)=> {
//     res.send('hello register world');
// });
console.log('subscribe');
app.listen(5000, ()=> {
    console.log(`server is running ${PORT}`); 
});