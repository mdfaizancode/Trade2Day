const {model} = require("mongoose");

const {UserSchema} = require("../schema/UserSchema");

const userModel = model("user", UserSchema);

module.exports = {userModel};