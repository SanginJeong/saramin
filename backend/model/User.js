const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = Schema({
  userId : {
    type : String,
    required : true,
  },
  password : {
    type : String,
    required : true,
  },
  name : {
    type : String,
    required : true,
  },
  age : {
    type : Number,
    required : true,
  },
  email : {
    type : String,
    required: true,
  },
  gender : {
    type : String,
    required : true,
  },
  addr1 : {
    type : String,
    required : true,
  },
  addr2: {
    type : String,
    required: true,
  },
  applicationList : {
    type : String,
  }
}, {timestamps: true})

const User = mongoose.model("User", userSchema);

module.exports = User;