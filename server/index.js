const container = require('./container');

const app = container.resolve('app');

console.log('logging!')
console.log('logging!')
app.logger.info('HAHAHAHAHAHAHHA');
app.start().catch((error) => {
  app.logger.error(error.stack);
  process.exit();
});