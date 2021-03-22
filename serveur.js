require('dotenv').config();
const http = require('./app');
const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})