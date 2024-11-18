// const { MongoClient } = require("mongodb"); MongoDB stuff
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // loads all existing env variables into the dokument

const uri = process.env.MONGO_URI; // the mongoDB string hat to be changed slightly - see .env

// const client = new MongoClient(uri);

function run() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch((err) => {
      console.log("connection error", err);
    });
  // == BELOW --> MongoDB-Client
  // client
  //   .connect()
  //   .then(() => {
  //     console.log("connected to MongoDB");
  //   })
  //   .catch((err) => {
  //     console.log("connection error", err);
  //   });
}

module.exports = { run }; // removed client export
