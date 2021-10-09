import { Router } from 'express';
import { sessionValidation } from '../validations/user-class.validation';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionValidation, sessionsController.create);

export { sessionsRouter };
