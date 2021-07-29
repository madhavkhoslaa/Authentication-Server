const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((data) => {
    console.log("Connected to DB");
  })
  .catch((data) => {
    console.log("Unable to connect to DB");
  });
