import express from 'express';
import requestValidation from '../../middlewares/validationRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  requestValidation(UserValidation.createUserZodSchema),
  UserController.createUser,
);

export const UserRoutes = router;
