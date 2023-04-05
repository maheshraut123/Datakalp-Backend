const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    User_Name: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20
    },
    Contact_No: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20
    },
    Entity_name: {
      type: String,
      required: true,
      trim: true,
      
      index: true,
      lowercase: true
    },
    Entity_Address: {
      type: String,
      required: true,
      trim: true,
      
      index: true,
      lowercase: true
    },
    User_Role: {
      type: String,
      required: true,
      trim: true,
      
      index: true,
      lowercase: true
    },
    User_Department: {
      type: String,
      required: true,
      trim: true,
      
      index: true,
      lowercase: true
    },
    User_Shift: {
      type: String,
      required: true,
      trim: true,
      
      index: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      
      lowercase: true
    },
     password: {
      type: String,
      required: true
    },
      },
  { timestamps: true }
);


// userSchema.virtual('password')
// .set(function(password){
//     this.hash_password= bcrypt.hashSync(password, 10)
// });


 module.exports= mongoose.model('User', userSchema);