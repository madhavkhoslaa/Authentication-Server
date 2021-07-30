const express = require("express");
const controller = require("../controllers/JWT");
const JWTRouter = express.Router();

JWTRouter.post("/create", controller.issueToken);

JWTRouter.get("/verify", controller.verifyToken);

JWTRouter.get("/decode", controller.decodeToken);

JWTRouter.delete("/delete", controller.deleteToken);

module.exports = JWTRouter;
