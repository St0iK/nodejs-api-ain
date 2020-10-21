const log4js = require('log4js');
module.exports = ({ logger, config }) => {
  return log4js.connectLogger(logger, { level: config.logLevel })
};
