const JWT = require("../../models/JWT");
const Impl = require("../implements/JWT");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const issueToken = async (req, res, next) => {
  try {
    const token = await Impl.createJWT(req.body);
    return res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const isValid = Impl.verifyJWT(req.body);
    return res.status(200).send({ isValid });
  } catch (error) {
    next(error);
  }
};

const decodeToken = async (req, res, next) => {
  try {
    const content = Impl.decodeJWT(req.body);
    return res.status(200).send({ content });
  } catch (error) {
    next(error);
  }
};

const deleteToken = async (req, res, next) => {
  try {
    Impl.removeJWT(req.body);
    return res.status(200).send({ message: "Token Removed" });
  } catch (error) {
    next(error);
  }
};

module.exports = { issueToken, verifyToken, deleteToken, decodeToken };
