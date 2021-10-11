import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import {
  createClientValidation,
  idParamsValidate,
} from '../validations/client-class.validation';

import { ClientsController } from '../controllers/clientsController';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.use(ensureAuthenticated);

clientsRouter.post('/', createClientValidation, clientsController.create);
clientsRouter.get('/', clientsController.index);
clientsRouter.get('/:id', idParamsValidate, clientsController.show);
clientsRouter.put('/:id', idParamsValidate, clientsController.update);

export { clientsRouter };
