import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import userRouter from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users/', userRouter)

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //throw new ApiError(400, 'Ore baba error')
//   next('ore baba error')
// })

//global error handling
app.use(globalErrorHandler)

//testing route
// app.get('/', (req: Request, res: Response) => {
//   res.json('I M HEALTHY GUYS😎')
// })

export default app
