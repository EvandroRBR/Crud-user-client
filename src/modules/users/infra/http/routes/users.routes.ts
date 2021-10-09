import { Router } from 'express';
import { createUserValidation } from '../validations/user-class.validation';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', createUserValidation, usersController.create);

export { usersRouter };
