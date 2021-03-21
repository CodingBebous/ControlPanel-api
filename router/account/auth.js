const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models').User;
const { Op } = require('sequelize')

router.post('/register', async (req, res) => {
    let { pseudo, email, password } = req.body

    let isCreated = await User.findOne({
        where: {
            [Op.or]: {
                pseudo,
                email
            }
        }
    })

    if(isCreated){
        res.status(409)
        res.send({user: isCreated.dataValues, error: 'can\'t create new user'})
    }else{
        const hash = await bcrypt.hash(password, 10)

        User.create({
            pseudo,
            email,
            password: hash,
            grade: 0
        })

        res.status(200)
        res.send({result: 'User created'})
    }
})

router.post('/login', async (req, res) =>{
    let { email, password } = req.body

    let isUser = await User.findOne({
        where: {email}
    })

    if(isUser){
        const canLogin = await bcrypt.compare(password, isUser.dataValues.password)

        if(canLogin){

            //Start session

            res.status(200)
            res.send({result: 'you are connected'})
        }else{
            res.status(409)
            res.send({result: 'wrong password'})
        }
    }else{
        res.status(409)
        res.send({result: 'no user with this email'})
    }
});

module.exports = router