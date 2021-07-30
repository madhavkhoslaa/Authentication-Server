const jwt = require("jsonwebtoken");
const JWT = require("../../models/JWT");
require("dotenv").config();

const createJWT = async (payload) => {
  const { expires, content } = payload;
  const token = jwt.sign(
    {
      expires,
      content,
    },
    process.env.JWT_KEY
  );
  const userToken = new JWT({ token, type: "JWT", expires });
  await userToken.save();
  return userToken;
};

const verifyJWT = (payload) => {
  const token = payload.token;
  try {
    jwt.verify(token, process.env.JWT_KEY);
    return true;
  } catch (error) {
    return false;
  }
};

const decodeJWT = (payload) => {
  const token = payload.token;
  return jwt.decode(token, process.env.JWT_KEY);
};

const removeJWT = async (payload) => {
  const token = payload.token;
  const DeletedJWT = await JWT.deleteOne({ token });
};

module.exports = { createJWT, verifyJWT, decodeJWT, removeJWT };
