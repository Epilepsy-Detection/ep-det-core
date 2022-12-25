const mongoose = require("mongoose");

module.exports = (logger) => {
  mongoose.set('strictQuery', false);

  // Connecting to the database and logging occurring errors or successfully connection
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      if (logger) {
        logger.info(
          `MongoDB connected: ${conn.connection.host}`
        );
      }
    })
    .catch((err) => {
      console.log(err);
      if (logger) {
        logger.error(`MongoDB failed to connect ${err}`);
      }
    });
};
