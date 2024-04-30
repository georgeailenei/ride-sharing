const express = require("express");

const app = express();
const port = 3000;

const start = () => {
  app.listen(port, console.log(`This server listens to port: ${port}`));
};

start();
