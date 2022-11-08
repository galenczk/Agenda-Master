// import dependencies
import "dotenv/config"
import express from "express"
import asyncHandler from "express-async-handler"

const app = express()

const PORT = process.env.PORT

app.use((error, req, res, next) => {
  console.log(`Unhandeled error ${error}, URL = ${req.originalURL}, method = ${req.method}`)
  res.send("500 - Server Error")
})