const yup = require("yup");

const createJWT = yup.object().shape({
  content: yup.object().required(),
  expires: yup.date().required(),
});

const OtherMethods = yup.object().shape({
  token: yup.string().required(),
});

module.exports = { createJWT, OtherMethods };
