const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        // URI is similar to a URL
        await mongoose.connect(process.env.MONGO_URI, {
            userNewURlParser: true,
            userUnifiedTopology: true,
            userFindAndModify: false
            // need to add the rest later
        });
    } catch (error) {

    };
};