const mongoose = require("mongoose")

const noteschema=mongoose.Schema({
    title:String,
    name:"string"
})


const newmodel= mongoose.model("note",noteschema)

module.exports = newmodel;