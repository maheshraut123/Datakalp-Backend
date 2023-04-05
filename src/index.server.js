const express = require("express");
const env= require('dotenv');
const app= express();
const mongoose = require('mongoose');
app.use(express.json());

env.config();


const authRoutes =require('./routes/user');


mongoose.connect(process.env.CONN_STRING,{dbName: "datakalp"})
  .then(() => {
    console.log("MongoDB Connected");
  });

app.use('/api', authRoutes);



app.get('/', (req, res) => {
    res.send('Welcome to Lutec World')
  })

app.listen(process.env.PORT, ()=>{
    console.log(`server is ready for port ${process.env.PORT}`)
})