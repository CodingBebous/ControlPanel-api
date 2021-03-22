const express = require('express');
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
const Message = require('./models').Message;

app.use(cors())
app.use(express.json());

const userRoute = require('./router/account/users.js');
app.use('/users', userRoute)

const authRoute = require('./router/account/auth.js');
app.use('/auth', authRoute)

const msgRoute = require('./router/messages/messages.js');
app.use('/messages', msgRoute)

io.on('connect', socket => {
    console.log('User connected')
    socket.on('sendMsg', data => {
        Message.create({
            content: data.content,
            user_id: data.user_id
        })
    })
})

module.exports = http