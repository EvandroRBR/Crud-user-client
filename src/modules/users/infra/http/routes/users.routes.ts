import { Router } from 'express';
import { createUserValidation } from '../validations/user-class.validation';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', createUserValidation, usersController.create);

usersRouter.use(ensureAuthenticated);

usersRouter.get('/', usersController.index);

export { usersRouter };
