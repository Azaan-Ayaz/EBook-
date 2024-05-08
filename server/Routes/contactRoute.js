const express = require("express")
const {createContact} = require("../Controller/contactController")

const router = express.Router()

router.post("/create/contact", createContact)

module.exports = router