const express = require('express');
const app = express();

app.use(express.json());       // to support JSON-encoded bodies

require('./routes/recipeRoutes')(app);

if(process.env.NODE_ENV === 'production'){

    //express will serve up our production assets
    //like main.js file
    app.use(express.static('../build'));        
    //express will serve index.html if it doesn't recognize the route
    const path =require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../','build','index.html'));
    })
    delete process.env['http_proxy'];
    delete process.env['HTTP_PROXY'];
    delete process.env['https_proxy'];
    delete process.env['HTTPS_PROXY'];
}

const PORT = process.env.port || 5000;
app.listen(PORT); 

