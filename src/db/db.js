const mongoose = require("mongoose")

 async function database(){
    await mongoose.connect("mongodb://localhost:27017/Task") 


    console.log("mongodb is connected")
 }


 module.exports=database