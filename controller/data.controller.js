const model = require('../model/data.model');

function newData (req, res){
    if(!req.body.name){
        return res.status(400).json({
            error: 'Missing name'
        })
    }
    const newdata = {
        name: req.body.name,
        id: data.length +1,
    }
    model.data.push(newdata);
    res.json(newdata);
}

function WelocmeMessage(req,res){
    res.send('Welcome to the Server, add endpoints and get your data.');
}

function ParamData (res, req){
    const dataId = Number(req.params.dataId);
    const dataparam = model.data[dataId];
    if(dataparam){
        res.statusCode(200).json(dataparam);
    }
    else{
        res.statusCode(404).json({
            error: "Data Not exist",
        })
    }

}

const gettingData = (req,res)=>{
    res.json(model.data);
}

module.exports = {
    newData,
    WelocmeMessage,
    ParamData,
    gettingData

}