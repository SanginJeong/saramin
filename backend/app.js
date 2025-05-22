const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', indexRouter);

const mongoURI = 'mongodb://localhost:27017/todo';

mongoose.connect(mongoURI)
  .then(()=>console.log("몽구스 연결"))
  .catch((error)=>console.log("연결실패", error.message))


app.listen(8080, ()=>console.log("express 8080 listend"))