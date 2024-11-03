const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://guest:guest@ecommms.ipzg5.mongodb.net/?retryWrites=true&w=majority&appName=ECommMS";

const client = new MongoClient(uri);

function run() {
  client
    .connect()
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch((err) => {
      console.log("connection error", err);
    });
}

module.exports = { run, client };
