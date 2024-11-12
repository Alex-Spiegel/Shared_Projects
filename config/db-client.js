// const { MongoClient } = require("mongodb"); MongoDB stuff
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://guest:guest@ecommms.ipzg5.mongodb.net/ecommerce?retryWrites=true&w=majority"; // had to be changed a bit

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
