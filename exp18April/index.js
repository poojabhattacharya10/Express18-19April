const express = require('express')
const app = express()

const student = require('./routes/student')

const path = require('path')

const connect = require('./connection')
connect()

app.use(student)


app.set('view engine' , 'ejs') // template engine :: ejs
app.set('views' , path.resolve('./views')) // views :: folder 

app.listen(3000 , (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server is running at port no. : 3000');
    }
})