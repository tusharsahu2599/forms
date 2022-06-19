const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true , useOldUrlParser: true})
        .then(() => {
            console.log('Connected to MongoDB');
        }).catch(err => {
            console.log('Error connecting to MongoDB: ', err.message);
        })
}

