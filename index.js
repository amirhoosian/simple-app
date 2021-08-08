const express = require('express');

const users = require('./user');


const app = express();

app.get('/' , (req , res)=>{

   res.send('<h1> hello from simple server :) </h1>');

})

app.get('/user' , (req , res)=>{

   res.json(users)

})

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log('server runing'));