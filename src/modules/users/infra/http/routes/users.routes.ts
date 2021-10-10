import { Router } from 'express';
import {
  createUserValidation,
  UpdateUserValidation,
} from '../validations/user-class.validation';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', createUserValidation, usersController.create);

usersRouter.use(ensureAuthenticated);

usersRouter.get('/', usersController.index);
usersRouter.get('/:id', usersController.show);
usersRouter.put('/', UpdateUserValidation, usersController.update);
usersRouter.delete('/', usersController.delete);

export { usersRouter };
