const express = require("express");
const cors = require("cors");
require("./db/connection");
const JWT = require("./JWT/routes/JWT");
const ErrorHandler = require("./middlewares/error");
require("dotenv").config();

app = express();

app.use(cors());
app.use(express.json());
app.use(JWT);
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});

module.exports = app;
