const mongoose = require("mongoose");

const mongooseConnectDB = (URL) => {
    mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) =>{
          console.log("Mongoose connected successfully!")
    }
    )
    .catch((err) => console.log("error connecting to the database", err));
}

module.exports = mongooseConnectDB;