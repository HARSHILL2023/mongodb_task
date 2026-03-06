const app = require("./src/app")
const database= require("./src/db/db")


database()

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})

