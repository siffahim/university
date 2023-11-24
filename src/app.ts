import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes
app.use('/api/v1', routes);

// app.use('/api/v1/users', UserRoutes);
// app.use('/api/v1/academic-semester', AcademicSemesterRoutes);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //Promise.reject(new Error('unhandle promise Rejection'))
//   //throw new ApiError(400, 'Ore baba error')
//   //next('ore baba error')
//   console.log(x)
// })

//server responding check
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'I M HEALTHY DARLING😎',
    time: new Date().toLocaleTimeString(),
  });
});

//global error handling
app.use(globalErrorHandler);

//handle not found route (404)
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });
});

export default app;
