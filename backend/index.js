require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();



//DB CONNECTION
mongoose.connect(process.env.DBCONNECTION,{
    useNewUrlParser:true ,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB connected");
}).catch((error)=>{
    console.log(error);
})
//MIDDLEWARES
//Alertnate for Body-Parser for latest version, to arsing the request body datas
app.use(express.json());   
app.use(express.urlencoded({extended: true}));
app.use(cors())


//ROUTE PACKAGES
const notesRoutes = require('./Routes/notespath');


//Routes
app.use('/api',notesRoutes) 








//SERVER CONFIGURATION
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Server is running on",PORT);
})