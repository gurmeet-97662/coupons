
const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/auth";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo Sucessfully");
  });
};

module.exports = connectToMongo;