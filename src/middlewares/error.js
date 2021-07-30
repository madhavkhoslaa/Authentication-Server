const errorHandler = async (error, req, res, next) => {
  //add more error handling
  console.log(error);
  internalError = ["MongooseError", "TypeError"];
  if (error.name in internalError) {
    return res.status(500).send({ messsage: "Internal Server Error" });
  }
};

module.exports = errorHandler;
