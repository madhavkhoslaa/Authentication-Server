const JWT = require("../../models/JWT");
const Owner = require("../../models/Owner");
const Impl = require("../routes/JWT");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const issueToken = async (req, res) => {
  const token = await Impl.createJWT(req.body);
  return res.send(200).send({ token });
};

const verifyToken = async (req, res) => {
  const isValid = await Impl.verifyJWT(req.body);
  return res.send(200).send({ isValid });
};

const decodeToken = async (req, res) => {
  const content = await Impl.decodeJWT(req.body);
  return res.status(200).send({ content });
};

const deleteToken = async (req, res) => {
  Impl.removeJWT(req.body);
  return res.status(200).send({ message: "Token Removed" });
};

modules.export = { issueToken, verifyToken, deleteToken };
