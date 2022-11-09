// import dependencies
const express = require("express")

const app = express()
const PORT = 33524

const db = require("./database/db-connector")

app.get("/", (req, res) => {
    res.send("Server connected")
})

// Route to return Customer data
app.get("/customers", (req, res) => {
    const query1 = "SELECT * FROM Customers;"
    db.pool.query(query1, function(error, result, fields){
        res.send(JSON.stringify(result))
    })
})


app.use((error, req, res, next) => {
  console.log(`Unhandeled error ${error}, URL = ${req.originalURL}, method = ${req.method}`)
  res.send("500 - Server Error")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})