const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/food-ordering", { useNewUrlParser: true })
  .then(() => {
    console.log("Db connection established");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
