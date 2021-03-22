const express = require('express');
const router = express.Router();
const User = require('../../models').User;
const Messages = require('../../models').Message;

router.get('/', async (req, res) => {
    const users = await User.findAll({
        include: [Messages]
    })

    res.send(users)
})

router.get('/:id', async (req, res) =>{
    const user = await User.findOne({
        where: {id: req.params.id}
    })

    res.send(user.dataValues)
});

router.delete('/:id/delete', async (req, res) =>{
    const user = await User.findOne({
        where: {id: req.params.id}
    })

    await user.destroy()

    res.send('user deleted')
});

module.exports = router