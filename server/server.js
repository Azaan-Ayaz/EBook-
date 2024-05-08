// const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
// const dotenv = require("dotenv")
const app = require("./app")

PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.clear()
    console.log(`Server is running on port ${PORT}`)
})