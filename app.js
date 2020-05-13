const express = require('express')
const mongoose =require('mongoose')
const router = require('./routes/router.js')
var bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 5050
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())
app.use(express.json())


mongoose.connect('mongodb+srv://api:userapi@cluster0-utdze.mongodb.net/api',{ useUnifiedTopology: true ,useNewUrlParser: true },(e)=>{
    if(!e){
        console.log('connection success')
    }else {
        console.log('some err',e)
    }
})


app.use("/", router);


app.listen(port,()=>{
    console.log('server running 5050')
})