const mongoose = require("mongoose") 
const donutSchema = mongoose.Schema({ 
 donut_name: {
    type:String, 
    required:true
 },
 donut_size:{
    type: Number, 
    required:true,
    min:1,
    max:20000
 },
 donut_type:{
    type: String ,
    required:true}
}) 
 
module.exports = mongoose.model("donut", 
donutSchema)