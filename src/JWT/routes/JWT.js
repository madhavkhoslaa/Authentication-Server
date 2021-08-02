const express = require("express");
const controller = require("../controllers/JWT");
const Schema = require("../../dto/JWT");
const Validator = require("../../middlewares/validation");
const JWTRouter = express.Router();

JWTRouter.post("/create", Validator(Schema.createJWT), controller.issueToken);

JWTRouter.get(
  "/verify",
  Validator(Schema.OtherMethods),
  controller.verifyToken
);

JWTRouter.get(
  "/decode",
  Validator(Schema.OtherMethods),
  controller.decodeToken
);

JWTRouter.delete(
  "/delete",
  Validator(Schema.OtherMethods),
  controller.deleteToken
);

module.exports = JWTRouter;
