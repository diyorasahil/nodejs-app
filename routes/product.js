const express = require("express");
const router = express.Router();



router.post('/create', (req, res) => {
    console.log("create Product")
})  

module.exports = router