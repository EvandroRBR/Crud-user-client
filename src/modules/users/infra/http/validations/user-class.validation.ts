import { Joi, Segments, celebrate } from 'celebrate';

export const createUserValidation = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    surname: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  },
});
