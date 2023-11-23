import colors from 'colors';
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

//uncaught Exception handle
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function run() {
  try {
    //connect to MongoDB
    await mongoose.connect(config.database_url as string);
    logger.info(colors.green('✅ Database is connect successfully'));

    //app listening here
    server = app.listen(config.port, () => {
      logger.info(
        colors.yellow(`Application listening on port ${config.port}`),
      );
    });
  } catch (err) {
    errorLogger.error(colors.red(`🤢 Failed to connect database ${err}`));
  }

  // //unHandleRejection error handle
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

run();

//sigterm error
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
