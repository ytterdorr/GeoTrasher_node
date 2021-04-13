const cors = require('cors')
const express = require("express");

const app = express()

// Middleware
app.use(cors())
// app.options('*', cors()) // update CORS availability before making public
app.use(express.json())


const port = 5000

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/get_session_item_count/:sessionId", (req, res) => {
    let fakeData = { Nicotine: 100, Plastic: 230, Other: 3 }
    res.send(JSON.stringify(fakeData))
})

app.post("/dump_data", (req, res) => {
    const data = req.body
    // console.log(data)
    res.status(200).json({ message: "Hellu" })

})

app.post("/sign_in", (req, res) => {
    res.status(200).json({ message: "Did nothing" });
})




app.listen(port, () => {
    console.log(`GeoTrasher server listening at port ${port}`)
})
