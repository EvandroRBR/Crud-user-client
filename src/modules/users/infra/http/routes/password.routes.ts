import { Router } from 'express';

import { forgotPasswordValidate } from '../validations/passwordValidation';
import { ForgotPasswordController } from '../controllers/ForgotPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();

passwordRouter.post(
  '/forgot',
  forgotPasswordValidate,
  forgotPasswordController.create,
);

export { passwordRouter };
