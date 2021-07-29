const express = require("express");
require("./db/connection");
const JWT = require("./JWT/routes/JWT");
const cors = require("cors");
require("dotenv").config();

app = express();
app.use(cors());
app.use(express.json());
app.use("JWT", JWT);

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
