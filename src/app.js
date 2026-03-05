const express = require("express")
const notemodel = require("./models/model")

const app = express()

app.use(express.json())

app.get("/notes", async (req, res) => {
    const notes = await notemodel.find()
    res.status(200).json(notes)
})

app.get("/notes/:id", async (req, res) => {
    const note = await notemodel.findById(req.params.id)
    res.status(200).json(note)
})


app.post("/notes", async (req, res) => {
    const data = req.body

    const note = await notemodel.create({
        title: data.title,
        name: data.name
    })

    res.status(201).json(note)
})

app.post("/notes/bulk", async (req, res) => {
    const data = req.body

    const notes = await notemodel.insertMany(data)

    res.status(201).json(notes)
})

app.delete("/notes/:id", async (req, res) => {
    await notemodel.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "deleted successfully" })
})


app.put("/notes/:id", async (req, res) => {
    const data = req.body

    const note = await notemodel.findByIdAndUpdate(
        req.params.id,
        {
            title: data.title,
            name: data.name
        },
        { new: true }
    )

    res.status(200).json(note)
})

app.patch("/notes/:id", async (req, res) => {
    const data = req.body

    const note = await notemodel.findByIdAndUpdate(
        req.params.id,
        { $set: data },
        { new: true }
    )

    res.status(200).json(note)
})

module.exports = app