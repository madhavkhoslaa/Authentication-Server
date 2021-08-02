const validator = (Schema) => async (req, res, next) => {
  try {
    await Schema.validate(req.body);
    return next();
  } catch (err) {
    return res.status(404).send({ message: "Bad Request" });
  }
};

module.exports = validator;
