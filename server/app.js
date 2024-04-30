const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB_CONNECTION_STRING);
    app.listen(port, console.log(`This server listens to port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
