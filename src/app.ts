import cors from 'cors';
import express, { Application, Request } from 'express';

const app: Application = express();

const port = 3000;

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing route
app.get('/', (req: Request, res: any) => {
  res.json('I M HEALTHY GUYS😎')
})

export default app
