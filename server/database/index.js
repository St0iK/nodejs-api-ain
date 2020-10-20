const mongoose = require('mongoose');

module.exports = ({ logger, config }) => {

  // Exit application on error
  mongoose.connection.on('error', (err) => {
    logger.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  });

  mongoose.set('debug', config.debug);

  mongoose.connect(config.databaseURL, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return new Promise((resolve, reject) => {
    mongoose.connection.on('connected', () => {
      logger.info(`Mongoose default connection is open to ${config.databaseURL}`);
      resolve(mongoose.connection)
    });
  });
};