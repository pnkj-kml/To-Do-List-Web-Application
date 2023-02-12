const express = require('express');
const port = 8000;

const app = express();

app.listen(port, function(err){
    if(err){
        console.log(`Error in running a server: ${err}`);
        return;
    }
    console.log(`Express is Up and Running on port : ${port}`);
});