const express = require('express');
const app = express();

app.use(express.json());

const messageRoute = require('./router/chat/messages.js');
app.use('/chat', messageRoute)

const userRoute = require('./router/account/users.js');
app.use('/user', userRoute)

const authRoute = require('./router/account/auth.js');
app.use('/auth', authRoute)

module.exports = app