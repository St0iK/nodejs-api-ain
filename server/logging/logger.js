const Log4js = require('log4js');

module.exports = ({ config }) => {
  Log4js.configure(config.loggingConfig);
  return Log4js.getLogger('nodejs-api-ain');
};
