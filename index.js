const express = require('express');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.static('./assests'));

app.use('/', require('./routes/home'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running a server: ${err}`);
        return;
    }
    console.log(`Express is Up and Running on port : ${port}`);
});