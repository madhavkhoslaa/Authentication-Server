const mongoose = require("mongoose");

// add and owner application key tag
const JWTSchema = mongoose.Schema({
  token: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});

// Add mongoose id type in owner to create a refrence
const JWT = mongoose.model("JWT", JWTSchema);

module.exports = JWT;
