const {model} = require("mongoose");

const {OrderSchema} = require("../shcemas/OrdersSchema")

const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};