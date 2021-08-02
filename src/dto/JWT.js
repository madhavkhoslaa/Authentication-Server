const yup = require("yup");

const createJWT = yup.Object().shape({
  content: yup.string().required(),
  expires: yup.date().require(),
});

const OtherMethods = yup.Object().shape({
  token: yup.string().required(),
});

//
module.exports = { createJWT, OtherMethods };
