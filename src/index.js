/* imports various modules */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./db');
const router = require('./routes/router');
/* PORT set */

const PORT = process.env.PORT || 5000;

/* makes express servre named app */

const app = express();


/* server usages */
app.use(cors());
app.use(express.json());
app.use(router);


/* server start function named server */

const server = async () => {
    try {
        const connected = await connect();
        console.log(connected);
        app.listen(PORT, () => { console.log('=> Server is running on port:', PORT) })
    } catch (error) {
        console.log(error);
    }
}

/* runs server  */

server()