const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/meanCrud", (err) => {
  if (!err) {
    console.log("Database Connected Successfully.");
  } else {
    console.log(err.message);
  }
});

module.exports = mongoose;
