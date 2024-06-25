const express = require('express')

const router = express.Router()

const User = require('../models/userModel')

router.post('/create-user', (req, res) => {
    const { name, email, _id } = req.body;
    const user = new User({
        name: name,
        email: email,
        _id: _id,
    })

    user.save((err, user) => {
        if (err) {
            res.status(400).send({ error: err })
        } else {
            res.status(200).send({ data: user })
        }
    })
})


module.exports = router