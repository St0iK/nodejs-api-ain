const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  [process.env.NODE_ENV]: true,
  env: process.env.NODE_ENV,
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 5000),

  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGODB_URI,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * Used by log4js configuration
   */
  loggingConfig: {
    appenders: { "nodejs-api-ain": { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["nodejs-api-ain"], level: process.env.LOG_LEVEL || 'debug' } }
  },
};