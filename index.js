// package imports
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

//routes import
const postRoute = require("./routes/post");
//listening port
const PORT = 8080

//
const app = express();


//middle wares
app.use("/data", postRoute);






//listen
app.listen(PORT,()=>{console.log(`http://localhost:${8080}`)});