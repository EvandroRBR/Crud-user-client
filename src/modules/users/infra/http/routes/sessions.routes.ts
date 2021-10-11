import { Router } from 'express';
import { sessionValidation } from '../validations/userValidation';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionValidation, sessionsController.create);

export { sessionsRouter };
