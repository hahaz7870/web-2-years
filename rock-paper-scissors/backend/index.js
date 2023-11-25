const express = require('express');

const app = express();

app.get('/hello', function(req, res){
    res.end('hello, world');
});

app.get('/test', function(req, res){
    res.end('test route working')
})

app.listen(5000, function(){
    console.log('server started')
} )

app.use('/static', express.static(`${__dirname}/../frontend/`));