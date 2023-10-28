const express = require("express");
const User = require("../models/user");
const router = express.Router();



router.get('/', (req, res) => {
    console.log("Hello User")
})

router.post('/create', async (req, res) => {
    try {
        const { firstname, lastname, email, username, phonenumber } = req.body;

        if (!firstname || !lastname || !email || !username || !phonenumber) {
            return res.json({
                status: 400,
                error: "Please required the all fields" || error
            })
        }

        const exitUser = await User.findOne({ email: email })
        if (exitUser) {
            return res.json({
                status: 400,
                error: "Email is already exits!" || error
            })
        }

        const user = new User({
            firstname, lastname, email, username, phonenumber
        })

        await user.save();

        res.json({
            status: 200,
            error: "User created successfully"
        })
    }
    catch (error) {
        res.json({
            status: 400,
            error: "something went wrong" || error
        })
    }
})

router.put('/edit/:id', (req, res) => {
    console.log("Hello User")
})

router.delete('/delete/:id', (req, res) => {
    console.log("Hello User")
})

module.exports = router