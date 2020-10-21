const Log4js = require('log4js');

module.exports = ({ config }) => {
  console.log(config.loggingConfig);
  Log4js.configure(config.loggingConfig);
  return Log4js.getLogger('default');
};
