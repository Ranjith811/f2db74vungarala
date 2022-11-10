const mongoose = require("mongoose") 
const donutSchema = mongoose.Schema({ 
 donut_name: String, 
 donut_size: Number, 
 donut_type: String 
}) 
 
module.exports = mongoose.model("donut", 
donutSchema)