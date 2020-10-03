const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

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
  port: parseInt(process.env.PORT, 10) || 5000,

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
    appenders: { "nodejs-api-ain": { type: "file", filename: "logs/nodejs-api-ain.log" } },
    categories: { default: { appenders: ["nodejs-api-ain"], level: process.env.LOG_LEVEL || 'debug' } }
  },
};