const express = require('express');
const router = express.Router();
const User = require('../../models').User;
const Message = require('../../models').Message;

router.get('/', async (req, res) =>{
    const messages = await Message.findAll({
        include: [User]
    })

    res.send(messages)
});

module.exports = router