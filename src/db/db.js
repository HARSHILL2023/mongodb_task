const mongoose = require("mongoose")

async function database() {
   await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/Task")


   console.log("mongodb is connected")
}


module.exports = database