import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing route
app.get('/', (req: Request, res: Response) => {
  res.json('I M HEALTHY GUYS😎')
})

export default app
