const container = require('./container');

const app = container.resolve('app');

app.logger.info("Starting application... 🎉");
app.start().catch((error) => {
  app.logger.error(error.stack);
  process.exit();
});