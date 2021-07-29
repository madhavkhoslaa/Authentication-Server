const express = require("express");
const JWT = require("../../models/JWT");
const controller = require("../controllers/JWT");
const JWTRouter = express.Router();

JWTRouter.post("/create", controller.issueToken);

JWTRouter.get("/verify", controller.verifyToken);

JWTRouter.get("/decode", controller.decodeToken);

JWTRouter.delete("/token", controller.deleteToken);

module.exports = JWTRouter;
