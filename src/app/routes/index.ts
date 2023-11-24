import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    router: UserRoutes,
  },
  {
    path: '/academic-semester',
    router: AcademicSemesterRoutes,
  },
];

//routes reduce
moduleRoutes.forEach(route => router.use(route.path, route.router));

// router.use('/users', UserRoutes);
// router.use('/academic-semester', AcademicSemesterRoutes);

export default router;
