import { Joi, Segments, celebrate } from 'celebrate';

export const forgotPasswordValidate = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
});
