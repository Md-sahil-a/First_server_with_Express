const { application } = require('express');
const express = require('express');

const thenewData = require('./controller/data.controller');
const welcome = require('./controller/data.controller');
const Paramdata = require('./controller/data.controller')
const gettingData = require('./controller/data.controller');

const PORT = 3000;

const server = express();


//writing logging middleWare
server.use((req, res, next) =>{
    console.log(` ${req}, ${res}`);
    next(); 
})

//express json middleWare

server.use(express.json());

server.post('/data', thenewData.newData);

server.get('/', welcome.WelocmeMessage);

server.get('/data', gettingData);



server.get('/data/:dataId', Paramdata.ParamData );

server.post('/data', ()=>{
    console.log("Posting the data........");
})

server.listen(PORT, ()=>{
    console.log(`Listning on the ${PORT}`);
})