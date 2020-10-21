const dotenv = require('dotenv');

process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'debug'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

if (envFound.error) {
  throw new Error(`⚠️  Couldn't find ./.env.${process.env.NODE_ENV} file  ⚠️`);
}

module.exports = {
  [process.env.NODE_ENV]: true,
  env: process.env.NODE_ENV,
  debug: process.env.NODE_ENV === "development",
  port: parseInt(process.env.PORT, 10) || 5000,
  databaseURL: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  logLevel: process.env.LOG_LEVEL,
  loggingConfig: {
    appenders: {
      "file": {
        type: "file", filename: "logs/nodejs-api-ain.log"
      },
      "stdout": {
        type: "stdout"
      },
    },
    categories: {
      default: {
        appenders: ["file", "stdout"], level: process.env.LOG_LEVEL
      }
    }
  },
};