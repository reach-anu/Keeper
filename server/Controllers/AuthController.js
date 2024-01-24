const registerModel = require('../models/registerModel.js');
const noteModel = require('../models/noteModel.js');

const login = async(req,res) =>{
    const {email}=req.body;
    const check = await registerModel.findOne({email: email})
    if(!check)
    {
        res.json("NOTEXISTS");
    }
    else{
        res.json("EXISTS");
    }
}

const register = async(req,res) =>{
    const {email}=req.body;
    const check = await registerModel.findOne({email: email})
    if(!check)
    {
        await registerModel.create(req.body)
        .then(result => res.json(result))
        .catch(err => console.log(err))
    }
    else{
      res.json("EXISTS");
    }
}

const notesList = async(req,res) =>{
    const notes= await noteModel.find();
    res.send(notes);
}

const noteAdd = async(req,res) =>{
    await noteModel.create(req.body)
    .then(result => res.send(result))
    .catch(err => console.log(err));
}

const noteDelete = async(req,res) =>{
    await noteModel.deleteOne({ _id: req.params.id})
    .then(result => res.send(result))
    .catch(err => console.log(err));
}

module.exports = { login, register, notesList, noteAdd, noteDelete};