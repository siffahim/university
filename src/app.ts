import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //Promise.reject(new Error('unhandle promise Rejection'))
//   //throw new ApiError(400, 'Ore baba error')
//   //next('ore baba error')
//   console.log(x)
// })

//testing route
// app.get('/', (req: Request, res: Response) => {
//   res.json('I M HEALTHY GUYS😎')
// })

//global error handling
app.use(globalErrorHandler);

export default app;
