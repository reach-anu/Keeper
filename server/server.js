const express= require('express');
const cors= require('cors');
const mongoose=require('mongoose')
require("dotenv").config();

const app= express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@keeper.hejwpyr.mongodb.net/keeper`);


app.use('/',require('./Routes/AuthRoutes')); 

app.listen(3001,()=> console.log("server started at port 3001"));