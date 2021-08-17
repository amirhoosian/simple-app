const express = require('express');
const route = require('./route/route');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const users = require('./user');
const app = express();

app.engine('hbs',exphbs());
app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route)

app.get('/' , (req , res)=>{
    
    res.render('index',{
        users: users
    })
})



const PORT = process.env.PORT || 3000
app.listen(PORT, console.log('server runing'));