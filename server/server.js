const express= require('express');
const cors= require('cors');
const mongoose=require('mongoose')
const noteModel = require('./models/noteModel.js');
require("dotenv").config();


const app= express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@keeper.hejwpyr.mongodb.net/?retryWrites=true&w=majority`);


app.get("/notes", async (req,res)=>{
    const notes= await noteModel.find({});
    res.send(notes);
});

app.post("/notes", async(req,res)=>{
    const {title,content} = req.body;
    const noteData = new noteModel({
        title,
        content
    });
    await noteData.save();
    res.json({"Message":"Form submitted"});
});

app.listen(3001,()=> console.log("server started at port 3001"));