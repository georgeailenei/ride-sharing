const mongoose = require("mongoose");

const connectDB = (connectString) => {
  return mongoose
    .connect(connectString)
    .then(() => console.log("The db is now connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
