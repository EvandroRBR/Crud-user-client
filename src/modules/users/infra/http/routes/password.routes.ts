import { Router } from 'express';

import {
  forgotPasswordValidate,
  resetPasswordValidate,
} from '../validations/passwordValidation';

import { ForgotPasswordController } from '../controllers/ForgotPasswordController';
import { ResetPasswordController } from '../controllers/ResetPasswordController';

const passwordRouter = Router();

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post(
  '/forgot',
  forgotPasswordValidate,
  forgotPasswordController.create,
);

passwordRouter.post(
  '/reset',
  resetPasswordValidate,
  resetPasswordController.create,
);

export { passwordRouter };
