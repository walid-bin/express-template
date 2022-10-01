/* imports  */
const mongoose = require('mongoose')
/* use dotenv for environment variable */
// require('dotenv').config()

/* mongodb database connection function and also exported, this will call from where connection estabilished */
module.exports = () => new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) reject(err.message);
        resolve('Connected to MongoDB!!!');
    });
})