import { Router } from 'express';
import {
  createUserValidation,
  UpdateUserValidation,
  idParamsValidate,
} from '../validations/userValidation';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', createUserValidation, usersController.create);

usersRouter.use(ensureAuthenticated);

usersRouter.get('/', usersController.index);
usersRouter.get('/:id', idParamsValidate, usersController.show);
usersRouter.put('/', UpdateUserValidation, usersController.update);
usersRouter.delete('/', usersController.delete);

export { usersRouter };
