import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users/', userRouter)

//testing route
app.get('/', (req: Request, res: Response) => {
  res.json('I M HEALTHY GUYS😎')
})

export default app
