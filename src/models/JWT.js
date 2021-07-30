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

JWTSchema.methods.toJSON = function () {
  const Token = this.toObject();
  delete Token._id;
  delete Token.__v;
  return Token;
};
// Add mongoose id type in owner to create a refrence
const JWT = mongoose.model("JWT", JWTSchema);

module.exports = JWT;
