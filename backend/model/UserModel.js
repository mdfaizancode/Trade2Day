const mongoose = require("mongoose");
const  { Schema } =  require("mongoose");
 
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId; // Google se aaya hai to password zaroori nahi
      },
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true, // local users ke liye googleId null rahega, sparse isse allow karta hai
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
 
module.exports =  mongoose.model("final", userSchema);