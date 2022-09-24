const { application } = require('express');
const express = require('express');

const PORT = 3000;

const server = express();

const data = [
    {
        id: 1,
        name: "GUCCI",
    },
    {
        id:2,
        name:"Adidas",
    },{
        id:3,
        name: "Puma",
    },{
        id:4,
        name: "Levi's",
    }
]

//writing logging middleWare
server.use((req, res, next) =>{
    console.log(` ${req}, ${res}`);
    next(); 
})

//express json middleWare

server.use(express.json());

server.post('/data', (req, res)=>{
    if(!req.body.name){
        return res.status(400).json({
            error: 'Missing name'
        })
    }
    const newdata = {
        name: req.body.name,
        id: data.length +1,
    }
    data.push(newdata);
    res.json(newdata);


})

server.get('/', (req,res)=>{
    res.send('Welcome to the Server, add endpoints and get your data.');
});

server.get('/data', (req,res)=>{
    res.json(data);
});



server.get('/data/:dataId', (res, req)=>{
    const dataId = Number(req.params.dataId);
    const dataparam = data[dataId];
    if(dataparam){
        res.statusCode(200).json(dataparam);
    }
    else{
        res.statusCode(404).json({
            error: "Data Not exist",
        })
    }

})

server.post('/data', ()=>{
    console.log("Posting the data........");
})

server.listen(PORT, ()=>{
    console.log(`Listning on the ${PORT}`);
})