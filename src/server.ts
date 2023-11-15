import colors from 'colors'
import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function run() {
  try {
    //connect to MongoDB
    await mongoose.connect(config.database_url as string)
    console.log(colors.bgGreen('✅ Database is connect successfully'))

    //app listening here
    app.listen(config.port, () => {
      console.log(colors.yellow(`Application listening on port ${config.port}`))
    })
  } catch (err) {
    console.log(colors.red('🤢 Failed to connect database'), err)
  }
}

run()
