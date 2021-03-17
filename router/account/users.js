const express = require('express');
const router = express.Router();
const User = require('../../models').User;

router.get('/', async (req, res) => {
    const user = await User.findOne({
        where: {id: 1}
    }).catch(() => {
        res.sendStatus(500)
    })

    res.send(user.dataValues)
})

module.exports = router