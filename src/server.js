require('dotenv').config();
require("./models/index");
const express = require('express');
const recordsRouter = require('./routes/records');

const PORT = process.env.PORT;
const server = express();

server.use('/records', recordsRouter);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

