const express = require('express');
const app = express();

app.use(express.json());

const userRoute = require('./router/account/users.js');
app.use('/users', userRoute)

const authRoute = require('./router/account/auth.js');
app.use('/auth', authRoute)

module.exports = app