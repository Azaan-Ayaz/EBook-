const express = require("express")
const dataBase = require("./Database/dataBase")
const app = express()
const cors = require("cors")
const router = require("./Routes/contactRoute")

dataBase()

app.use(express.json())
app.use(cors())
app.use("/",router)

module.exports = app