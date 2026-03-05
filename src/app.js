const express = require("express")
const notemodel= require("./models/model")
const app = express()

app.use(express.json())

const notes = []

app.post("/notes",async (req,res)=>{
    const data= req.body

    await notemodel.create({
        title:data.title,
        name:data.name

    })
    res.status(200).send("data added succesfully now rest in peace")

})
module.exports = app