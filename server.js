const express = require('express');

const PORT = 3000;

const server = express();


server.get('/', (req,res)=>{
    res.send('Welcome to the Server, add endpoints and get your data.');
});

server.get('/message', (req,res)=>{
    res.send({
        id:1,
        'name': "Ryan dhal",
    })
})

server.post('/message', ()=>{
    console.log("Posting the data........");
})

server.listen(PORT, ()=>{
    console.log(`Listning on the ${PORT}`);
})