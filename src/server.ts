import colors from 'colors'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function run() {
  try {
    //connect to MongoDB
    await mongoose.connect(config.database_url as string)
    logger.info(colors.green('✅ Database is connect successfully'))

    //app listening here
    app.listen(config.port, () => {
      logger.info(colors.yellow(`Application listening on port ${config.port}`))
    })
  } catch (err) {
    errorLogger.error(colors.red(`🤢 Failed to connect database ${err}`))
  }
}

run()
