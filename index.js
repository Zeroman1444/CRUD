const express = require('express');
const path = require('path');
const morgan = require('morgan');

const uuid = require('uuid/v4');


//Initializations
const app = express();
require('./database');  

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));

//Global variables
app.use((req, res, next) => {
   app.locals.format = format;
   next();
});

//Routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});