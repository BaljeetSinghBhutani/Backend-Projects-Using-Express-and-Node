const mongoose = require('mongoose');

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {

        useNewUrlParser: true,
        useUnifiedTopology: true

    })
        .then(console.log("DB Connection Successfully")
        )
        .catch((error) => {
            console.log("DB Connection facing an error: " + error)
            process.exit(1);
        })


};


module.exports = connectWithDb;