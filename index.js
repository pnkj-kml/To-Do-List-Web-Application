const express = require('express');
const port = 8000;

const db = require('./config/mongoose');

const Todo = require('./models/to_do_list');

const app = express();

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// Middleware used
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');



app.use(express.static('./assests'));



app.use('/', require('./routes/home'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running a server: ${err}`);
        return;
    }
    console.log(`Express is Up and Running on port : ${port}`);
});