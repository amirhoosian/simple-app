const express = require('express');
const route = require('./route/route');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route)

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log('server runing'));